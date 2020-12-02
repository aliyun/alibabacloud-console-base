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
 * DEF build environment
 */
exports.build_env = process.env.BUILD_ENV

/**
 * DEF config filename
 */
exports.FILE_NAMES = {
  def_config: 'abc.json',
  console_config: 'demo/consoleConfig.js',
  i18n_messages: 'demo/i18nMessages.js',
  webpack_config: 'webpack.config.js',
  html_assets_tpl: 'assets/tpl.html',
  html_assets_tpl_from_developer: 'demo/index.html',
}
