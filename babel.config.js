module.exports = {
  'presets': [
    ['@babel/preset-env', {
      'modules': false
    }]
  ],
  'plugins': [
    [
      '@babel/plugin-transform-runtime',
      {
        // Since Webpack know how to deal with the ES6 modules,
        // we don't transform it.
        'useESModules': true
      }
    ]
  ],
  'env': {
    'test': {
      'presets': [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current'
            }
          }
        ]
      ],
      'plugins': ['@babel/plugin-transform-modules-commonjs']
    }
  }
}