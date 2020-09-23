const path = require('path')
const cons = require('../cons')

function getI18nMessages() {
  try {
    return require(path.join(cons.cwd, cons.FILE_NAMES.i18n_messages))
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    return {}
  }
}

module.exports = getI18nMessages
