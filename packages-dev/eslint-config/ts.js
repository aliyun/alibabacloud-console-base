module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true,
      blockBindings: true,
      classes: true,
      defaultParams: true,
      destructuring: true,
      forOf: true,
      legacyDecorators: true,
      objectLiteralComputedProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      spread: true,
      superInFunctions: true,
      templateStrings: true
    }
  },
  extends: [
    './config/es6',
    './config/ts',
    './config/import'
  ].map(require.resolve)
};
