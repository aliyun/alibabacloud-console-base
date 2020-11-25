/**
 * 构建器默认使用的 babel presets 配置
 */

module.exports = [
  [
    require.resolve('@babel/preset-env'),
    {
      targets: '>0.2% in CN, not dead',
    },
  ],
  [require.resolve('@babel/preset-react')],
]
