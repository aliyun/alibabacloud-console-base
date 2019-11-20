const path = require('path')
const execSync = require('child_process').execSync

const configPath = path.join(__dirname, '../config/webpack.prod.js')

module.exports = () => {
  execSync(
    `webpack --config ${configPath} --progress --bail --display-error-details`,
    {
      stdio: 'inherit'
    }
  )
}
