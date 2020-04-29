const path = require('path')
const cons = require('../cons')

function getConsoleConfig() {
  try {
    return require(path.join(cons.cwd, cons.FILE_NAMES.console_config))
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    return {}
  }
}

module.exports = getConsoleConfig
