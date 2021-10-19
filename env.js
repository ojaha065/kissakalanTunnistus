const { parseEnvironmentVariables } = require('@absxn/process-env-parser')

function parseRequiredEnvs() {
  const result = parseEnvironmentVariables({
    HOST: { default: 'localhost' },
    PORT: { default: 443 },
    SSL: { parser: ssl => ssl === 'true', default: false },
    ACS_URL: {},
    SLO_URL: {},
    AUDIENCE: {},
  })
  if (result.success) {
    console.table(result.envPrintable)
    return result.env
  } else {
    console.table(result.envPrintable)
    throw new Error('Could not parse environment variables')
  }
}

exports.env = parseRequiredEnvs()