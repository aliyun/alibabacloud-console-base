const path = require('path')

/**
 * Current working directory
 */
exports.cwd = process.cwd()

/**
 * DEF build directory name
 */
exports.build_dir_name = process.env.BUILD_DEST || 'build'

/**
 * DEF build destination directory, full path
 */
exports.build_dir = path.join(exports.cwd, exports.build_dir_name)

/**
 * DEF builder directory
 */
exports.builder_dir = process.env.BUILD_BUILDER_DIR

/**
 * DEF build environment
 */
exports.build_env = process.env.BUILD_ENV

/**
 * DEF config filename
 */
exports.def_config_file = 'abc.json'

/**
 * DEF log level
 * info (default)
 * verbose
 */
exports.def_log_level = process.env.DEF_LOG_LEVEL

/**
 * DEF build arguments
 */
exports.build_argv = (function () {
  try {
    return JSON.parse(process.env.BUILD_ARGV)
  } catch (err) {
    if (exports.def_log_level === 'verbose') {
      console.log(err)
    }
    return []
  }
})()

/**
 * DEF build debug mode
 */
exports.debug_mode = process.env.BUILD_DEBUG

/**
 * Console configuration in dev mode
 */
exports.aliyun_console_config = (function () {
  try {
    return require(path.join(exports.cwd, './demo/consoleConfig.js'))
  } catch (err) {
    console.error(err)
    return {}
  }
})()

/**
 * I18n messages in dev mode
 */
exports.i18n_messages = (function () {
  try {
    return require(path.join(exports.cwd, './demo/i18nMessages.js'))
  } catch (err) {
    console.error(err)
    return {}
  }
})()

/**
 * User customized webpack.config.js
 */
exports.merge_webpack_config = (function () {
  try {
    return require(path.join(exports.cwd, './webpack.config.js'))
  } catch (err) {
    return (config) => config
  }
})()
