const path = require('path')
const cons = require('../cons')

function getWebpackConfig() {
  try {
    return require(path.join(cons.cwd, cons.FILE_NAMES.webpack_config))
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    return (config) => config
  }
}

module.exports = getWebpackConfig
