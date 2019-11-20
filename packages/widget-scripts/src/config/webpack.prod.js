const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const common = require('./webpack.common')
const { cwd, build_dir, merge_webpack_config, build_env } = require('../cons')
const webpackExternals = require('./webpackExternals')
const getAbc = require('../utils/getAbc')
const isTypescript = require('../utils/isTypescript')
const babelPresets = require('./babelPresets')
const babelPlugins = require('./babelPlugins')
const getVersion = require('../utils/getVersion')
const getId = require('../utils/getId')

// Get build options from abc.json
const {
  assets: {
    builder: {
      options: buildOptions = {}
    } = {}
  } = {},
  library
} = getAbc()


module.exports = () => {
  const plugins = [
    new webpack.DefinePlugin({
      'window.__IN_WIDGET_DEV_ENV__': false,
      'process.env.WIDGET_ID': JSON.stringify(getId()),
      'process.env.WIDGET_VER': JSON.stringify(getVersion())
    })
  ]
  // Add Bundle Analyzer to analyse the bundle
  if (buildOptions.analyse && build_env !== 'cloud') {
    plugins.push(new BundleAnalyzerPlugin())
  }

  const defaultConfig = merge(common, {
    mode: 'production',
    entry: {
      index: path.join(cwd, './src'),
    },
    output: {
      filename: '[name].js',
      path: build_dir,
      library,
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        isTypescript()
        ? { // tsc
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'awesome-typescript-loader'
          }
        }
        : { // babel
          test: /\.m?jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: babelPresets,
              plugins: babelPlugins
            }
          },
        }
      ]
    },
    plugins,
    optimization: {
      minimize: true
    },
    // devtool: 'source-map',
    // https://github.com/webpack-contrib/babel-minify-webpack-plugin/issues/68
    externals: [
      // Object
      webpackExternals,
      // Regexp to exclude all the cherry-picked wind sub-modules
      /^@ali\/wind\/lib\/.+$/,
      // Regexp to exclude all the cherry-picked widget console utils
      /^@ali\/widget-utils-console\/lib\/.+$/
    ],
  })

  const mergedConfig = merge_webpack_config(
    defaultConfig,
    {
      mode: defaultConfig.mode
    },
    merge
  )

  return mergedConfig
}