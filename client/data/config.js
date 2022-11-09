import Raven from 'raven-js'

export const sentry_url =
  'https://4669361226224bd1b083b71e62b6800f@o4504121466880000.ingest.sentry.io/4504121617285120'

export function logException(ex, context) {
  Raven.captureMessage(ex.message)
  Raven.showReportDialog()
  Raven.captureException(ex, {
    extra: context,
  })
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex)
}
