const fs = require('fs-extra')
const path = require('path')
const cons = require('../cons')

const pkgJsonFilename = 'package.json'
const targetPath = path.join(cons.cwd, pkgJsonFilename)

function getId() {
  try {
    const pkgJson = fs.readJsonSync(targetPath)
    return pkgJson && pkgJson.name
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    process.exit(1)
  }
}

module.exports = getId
