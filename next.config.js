const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = phase => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const isProd = phase === PHASE_PRODUCTION_BUILD

  const env = {
    ENVIRONMENT: (() => {
      if (isDev) return 'dev'
      if (isProd) return 'prod'
      return 'undefined'
    })(),
  }

  // next.config.js object
  return {
    env,
  }
}

