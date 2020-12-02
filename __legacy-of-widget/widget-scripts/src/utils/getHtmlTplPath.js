const path = require('path')
const fs = require('fs')
const cons = require('../cons')

function getHtmlTplPath() {
  let tpl_path = path.resolve(__dirname, '../assets/tpl.html')

  if (fs.existsSync(path.join(cons.cwd, 'demo/index.html'))) {
    tpl_path = path.join(cons.cwd, 'demo/index.html')
  }

  return tpl_path
}

module.exports = getHtmlTplPath
