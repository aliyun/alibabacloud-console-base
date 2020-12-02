module.exports = {
  'import/exports-last': 1,
  'import/no-useless-path-segments': 1,
  'import/no-self-import': 'error',
  'import/order': ['error', {
    groups: [
      'builtin',
      'external',
      'internal',
      'parent',
      'sibling',
      'index'
    ],
    pathGroups: [{
      pattern: '@ali*/**', // 厂内二方包
      group: 'external',
      position: 'after'
    }, {
      pattern: ':/**', // alias
      group: 'internal'
    }, {
      pattern: '~/**', // alias
      group: 'internal'
    }],
    pathGroupsExcludedImportTypes: [], // 否则厂内二方包和三方包之间不可加空行
    'newlines-between': 'always'
  }]
};
