import { captureException } from '@sentry/nextjs'

const captureSentryException = (errors: unknown) => {
  try {
    const stringified = JSON.stringify(errors)
    captureException(stringified)
  } catch {
    captureException(errors)
  }
}

export { captureSentryException }
