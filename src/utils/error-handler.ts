import { toast } from 'sonner'

import { captureSentryException } from './sentry'
import {
  ApiErrorKind,
  GeneralApiProblem,
  isGeneralApiProblem
} from '../services/api/helpers/api-problem.types'

const FALLBACK_ERROR_MESSAGE = 'An unexpected error occurred'

const showUnexpectedError = (error: unknown) => {
  toast.error(FALLBACK_ERROR_MESSAGE)
  captureSentryException(error)
}

const getDisplayMessage = (error: GeneralApiProblem): string => {
  if (typeof error.message === 'string' && error.message.trim().length > 0) {
    return error.message
  }

  switch (error.kind) {
    case ApiErrorKind.TIMEOUT:
      return 'Request timed out, please try again'
    case ApiErrorKind.CONNECTION:
      return 'Cannot connect to server, please check your connection'
    case ApiErrorKind.SERVER:
      return 'Server error, please try again in a moment'
    case ApiErrorKind.UNAUTHORIZED:
      return 'Session expired, please sign in again'
    case ApiErrorKind.FORBIDDEN:
      return 'You do not have permission for this action'
    case ApiErrorKind.NOT_FOUND:
      return 'Requested resource was not found'
    case ApiErrorKind.CONFLICT:
      return 'Request conflicts with existing data'
    case ApiErrorKind.UNPROCESSABLE:
    case ApiErrorKind.BAD_DATA:
      return 'Input data is invalid'
    case ApiErrorKind.REJECTED:
      return 'Request was rejected'
    case ApiErrorKind.GONE:
      return 'Requested resource is no longer available'
    case ApiErrorKind.FOUND:
      return 'Request was redirected'
    case ApiErrorKind.CANCELLED:
      return 'Request was cancelled'
    case ApiErrorKind.UNKNOWN:
    default:
      return FALLBACK_ERROR_MESSAGE
  }
}

const reportAndToast = (error: GeneralApiProblem) => {
  const message = getDisplayMessage(error)
  toast.error(message)
  captureSentryException(error)
}

export const handleGenericError = (error: unknown) => {
  if (!isGeneralApiProblem(error)) {
    showUnexpectedError(error)
    return
  }

  switch (error.kind) {
    case ApiErrorKind.UNAUTHORIZED:
      // Must be logged out
      reportAndToast(error)
      break
    default:
      reportAndToast(error)
      break
  }
}

export function isNotFoundError(error: unknown): boolean {
  return isGeneralApiProblem(error) && error.kind === ApiErrorKind.NOT_FOUND
}
