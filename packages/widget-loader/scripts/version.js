const fs = require('fs')
const path = require('path')
const packageJson = require('../package.json')

const source = fs.readFileSync(
  path.join(__dirname, '../src/utils/log/index.js')
).toString()

const target = source.replace(
  /loader: '.+',/g,
  `loader: '${packageJson.version}',`
)

fs.writeFileSync(
  path.join(__dirname, '../src/utils/log/index.js'),
  target
)
