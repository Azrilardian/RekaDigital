export enum ApiErrorKind {
  TIMEOUT = 'timeout',
  CONNECTION = 'cannot-connect',
  SERVER = 'server',
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not-found',
  GONE = 'gone',
  UNPROCESSABLE = 'unprocessable-entity',
  REJECTED = 'rejected',
  UNKNOWN = 'unknown',
  BAD_DATA = 'bad-data',
  FOUND = 'found',
  CONFLICT = 'conflict',
  CANCELLED = 'cancelled'
}

export type ApiProblemErrors = Record<string, unknown[]> | unknown

export type ApiProblemBase = {
  kind: ApiErrorKind
  status?: number
  message?: string
  errors?: ApiProblemErrors
  raw?: unknown
  temporary?: true
}

export type GeneralApiProblem =
  | (ApiProblemBase & { kind: ApiErrorKind.TIMEOUT; temporary: true })
  | (ApiProblemBase & { kind: ApiErrorKind.CONNECTION; temporary: true })
  | (ApiProblemBase & { kind: ApiErrorKind.SERVER })
  | (ApiProblemBase & { kind: ApiErrorKind.UNAUTHORIZED })
  | (ApiProblemBase & {
      kind: ApiErrorKind.FORBIDDEN
      errors?: ApiProblemErrors
    })
  | (ApiProblemBase & { kind: ApiErrorKind.NOT_FOUND })
  | (ApiProblemBase & { kind: ApiErrorKind.GONE })
  | (ApiProblemBase & { kind: ApiErrorKind.CONFLICT })
  | (ApiProblemBase & {
      kind: ApiErrorKind.UNPROCESSABLE
      errors?: ApiProblemErrors
    })
  | (ApiProblemBase & { kind: ApiErrorKind.REJECTED })
  | (ApiProblemBase & { kind: ApiErrorKind.FOUND; temporary: true })
  | (ApiProblemBase & { kind: ApiErrorKind.UNKNOWN; temporary: true })
  | (ApiProblemBase & {
      kind: ApiErrorKind.BAD_DATA
      errors?: ApiProblemErrors
    })
  | (ApiProblemBase & { kind: ApiErrorKind.CANCELLED; temporary: true })

export function isGeneralApiProblem(
  value: unknown
): value is GeneralApiProblem {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const kind = (value as { kind?: unknown }).kind
  return (
    typeof kind === 'string' &&
    Object.values(ApiErrorKind).includes(kind as ApiErrorKind)
  )
}

export type ProblemMapperInput = {
  response: {
    status?: number
    data?: unknown
    problem?: string | null
  }
}

export type ProblemMapper = (
  input: ProblemMapperInput
) => GeneralApiProblem | null
