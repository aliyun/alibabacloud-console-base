const webpack = require('webpack')
const kebabCase = require('lodash.kebabcase')
const getAbc = require('../utils/getAbc')


// Prefix for generated local class names
const classNamePrefix = getAbc().library || 'WIDGET'

module.exports = {
  resolve: {
    // Add ".ts" and ".tsx" to support typescript
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      
      {
        test: /\.(css|less)$/,
        include: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ],
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: {
              singleton: true, // Just generate one style tag for one widget.
              attrs: {
                // Add a custom attr to the generated style tag to easily
                // identify which widget the style tag belonging to.
                'data-widget': kebabCase(classNamePrefix)
              }
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true, // Use css-module
              importLoaders: 2, // There are 2 loaders before this one
              localIdentName: `${classNamePrefix}-[local]-[hash:base64:5]`
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: require.resolve('./postcss.config.js')
              }
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.STYLE_PREFIX": JSON.stringify("aliyun-widget-")
    })
  ]
}