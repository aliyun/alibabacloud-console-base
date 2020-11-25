module.exports = {
  extends: [
    './react',
    './ts',
    './config/tsx',
    './config/import'
  ].map(require.resolve),
  /**
   * 以下是为了防止在 JS 中报返回类型缺失的问题，说「This is an intentional decision.」无法苟同..
   * 
   * 见 https://github.com/typescript-eslint/typescript-eslint/issues/964
   */
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  overrides: [{
    files: ['*.ts', '*.tsx'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': ['warn']
    }
  }]

};
