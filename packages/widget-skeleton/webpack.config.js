const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, './dist'),
    libraryTarget: 'commonjs2'
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react']
            ],
            plugins: [
              ['@babel/plugin-transform-runtime']
            ]
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: {
              singleton: true,
              attrs: {
                from: 'aliyun-widget-skeleton'
              }
            }
          },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  externals: {
    /**
     * `react` related packages are excluded by default, widget must runs in
     * a environment that have `react` contained.
     */
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types',
    }
  }
}