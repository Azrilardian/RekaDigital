import { ApiResponse } from 'apisauce'

import {
  ApiErrorKind,
  GeneralApiProblem,
  ProblemMapper,
  ProblemMapperInput
} from './api-problem.types'

type ApiProblemCode =
  | 'CONNECTION_ERROR'
  | 'NETWORK_ERROR'
  | 'TIMEOUT_ERROR'
  | 'SERVER_ERROR'
  | 'CANCEL_ERROR'
  | 'CLIENT_ERROR'
  | 'UNKNOWN_ERROR'
type TransportProblemCode = keyof typeof TRANSPORT_KIND_MAPPERS

const TRANSPORT_KIND_MAPPERS = {
  CONNECTION_ERROR: { kind: ApiErrorKind.CONNECTION, temporary: true },
  NETWORK_ERROR: { kind: ApiErrorKind.CONNECTION, temporary: true },
  TIMEOUT_ERROR: { kind: ApiErrorKind.TIMEOUT, temporary: true },
  SERVER_ERROR: { kind: ApiErrorKind.SERVER },
  CANCEL_ERROR: { kind: ApiErrorKind.CANCELLED, temporary: true }
} as const satisfies Partial<
  Record<ApiProblemCode, { kind: ApiErrorKind; temporary?: true }>
>

const CLIENT_STATUS_MAPPERS = {
  400: ApiErrorKind.BAD_DATA,
  401: ApiErrorKind.UNAUTHORIZED,
  403: ApiErrorKind.FORBIDDEN,
  404: ApiErrorKind.NOT_FOUND,
  409: ApiErrorKind.CONFLICT,
  410: ApiErrorKind.GONE,
  422: ApiErrorKind.UNPROCESSABLE,
  429: ApiErrorKind.REJECTED
} as const

const STATUS_WITH_ERROR_PAYLOAD = new Set<ApiErrorKind>([
  ApiErrorKind.BAD_DATA,
  ApiErrorKind.FORBIDDEN,
  ApiErrorKind.UNPROCESSABLE
])

function baseProblem(input: ProblemMapperInput) {
  return {
    status: input.response.status,
    message: extractMessage(input.response.data),
    raw: input.response.data
  }
}

function extractMessage(data: unknown): string | undefined {
  if (typeof data === 'string') {
    return data
  }

  if (typeof data !== 'object' || data === null) {
    return undefined
  }

  const record = data as Record<string, unknown>
  if (typeof record.message === 'string') {
    return record.message
  }
  if (typeof record.error === 'string') {
    return record.error
  }
  return undefined
}

function isTransportProblemCode(
  value: string | null | undefined
): value is TransportProblemCode {
  return typeof value === 'string' && value in TRANSPORT_KIND_MAPPERS
}

const mapTransportProblem: ProblemMapper = (input) => {
  const code = input.response.problem
  if (!isTransportProblemCode(code)) {
    return null
  }

  const mapped = TRANSPORT_KIND_MAPPERS[code]
  if (!mapped) {
    return null
  }

  return {
    ...mapped,
    ...baseProblem(input)
  }
}

const mapClientStatusProblem: ProblemMapper = (input) => {
  const status = input.response.status

  if (input.response.problem !== 'CLIENT_ERROR' || typeof status !== 'number') {
    return null
  }

  const kind =
    CLIENT_STATUS_MAPPERS[status as keyof typeof CLIENT_STATUS_MAPPERS]

  if (!kind) {
    return {
      kind: ApiErrorKind.REJECTED,
      ...baseProblem(input)
    }
  }

  return {
    kind,
    ...baseProblem(input),
    ...(STATUS_WITH_ERROR_PAYLOAD.has(kind)
      ? { errors: input.response.data }
      : {})
  }
}

const mapRedirectProblem: ProblemMapper = (input) => {
  if (input.response.status !== 302) {
    return null
  }

  return {
    kind: ApiErrorKind.FOUND,
    temporary: true,
    ...baseProblem(input)
  }
}

const mapUnknownProblem: ProblemMapper = (input) => {
  if (input.response.problem !== 'UNKNOWN_ERROR') {
    return null
  }

  return {
    kind: ApiErrorKind.UNKNOWN,
    temporary: true,
    ...baseProblem(input)
  }
}

const problemMappers: readonly ProblemMapper[] = [
  mapTransportProblem,
  mapClientStatusProblem,
  mapRedirectProblem,
  mapUnknownProblem
]

/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param response The api response.
 */
export function getGeneralApiProblem(
  response: ApiResponse<unknown>
): GeneralApiProblem | null {
  const input: ProblemMapperInput = {
    response: {
      status: response.status,
      data: response.data,
      problem: response.problem
    }
  }

  for (const mapper of problemMappers) {
    const mapped = mapper(input)
    if (mapped) {
      return mapped
    }
  }

  if (!response.ok) {
    return {
      kind: ApiErrorKind.UNKNOWN,
      temporary: true,
      ...baseProblem(input)
    }
  }

  return null
}
