module.exports = {
  /**
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
   * 
   * 极慢，有个 ISSUE，先关了
   * 
   * https://github.com/import-js/eslint-plugin-import/issues/2340
   */
  'import/namespace': 'error',
  /**
   * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
   * 
   * 极慢，有个 ISSUE，先关了
   * 
   * https://github.com/import-js/eslint-plugin-import/issues/2348
   */
  'import/no-cycle': ['error', {
    ignoreExternal: false,
    maxDepth: 4
  }],
  'import/no-useless-path-segments': 1,
  'import/no-self-import': 'error',
  'import/exports-last': 1,
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
