// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.

import * as Sentry from '@sentry/nextjs'

import { IS_PROD, SENTRY_DSN } from './src/config/env'

if (IS_PROD && SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration()
    ],
    tracesSampleRate: 1,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    debug: true
  })
}
