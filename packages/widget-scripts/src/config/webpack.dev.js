const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common')
const getAbc = require('../utils/getAbc')
const { cwd, aliyun_console_config, i18n_messages } = require('../cons')
const isTypescript = require('../utils/isTypescript')
const babelPresets = require('./babelPresets')
const babelPlugins = require('./babelPlugins')


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // Default port
    port: 3000,
    // Default host
    host: '127.0.0.1',
    // Enable HMR
    hot: true,
    // Only subdomains of console can be allowed to access the dev server
    allowedHosts: ['.console.aliyun.com'],
    // Turn off logging
    clientLogLevel: 'none',
    // Serve content from "demo" directory
    contentBase: path.join(cwd, 'demo'),
    // Supress bundle information
    noInfo: true,
    // Show a full-screen overlay in the browser when there are compiler errors
    overlay: true,
  },
  module: {
    // Added for react-hot-loader to work with React 16.6+
    // Typescript will not hot reload
    rules: [
      {
        test: /\.m?jsx?$/,
        include: /node_modules/,
        use: ['react-hot-loader/webpack']
      },
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
              plugins: [
                ...babelPlugins,
                [
                  require.resolve('react-hot-loader/babel')
                ]
              ]
            }
          },
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../assets/tpl.html'),
      templateParameters: {
        aliyun_console_config: JSON.stringify(aliyun_console_config),
        i18n_messages: JSON.stringify(i18n_messages)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      // The "@ali" prefix here is for widget name
      // Not a package name
      [`@ali/widget-${getAbc().project}`]: path.join(cwd, './src'),
    },
  },
})