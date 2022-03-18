module.exports = {
  plugins: [
    'import'
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: [
          'tsconfig.json',
          'packages/*/tsconfig.json'
        ]
      }
    }
  },
  rules: require('../rules/import')
};
