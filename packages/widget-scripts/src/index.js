const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2), {
    alias: {
      P: 'port', // Capital "P" for port
      H: 'host', // Capital "H" for host
    },
  })
  const cmd = args._[0]

  switch (cmd) {
    case 'start':
      require('./cmds/start')(args)
      break
    case 'build':
      require('./cmds/build')(args)
      break
    default:
      console.error(`"${cmd}" is not a valid command!`)
      break
  }
}
