/**
 * 构建器默认使用的 babel plugins 配置
 */

module.exports = [
  [ require.resolve('@babel/plugin-transform-runtime') ],
  [ require.resolve('@babel/plugin-proposal-class-properties') ],
  [
    require.resolve('babel-plugin-lodash'),
    {
      id: ['lodash', 'recompose']
    }
  ]
]
