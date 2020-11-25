module.exports = {
  'no-shadow': 'off', // 必需，否则 enum 会被误报 见 https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md#how-to-use
  '@typescript-eslint/no-shadow': ['error'],
  'no-use-before-define': 'off', // 必需，否则会误报，见 https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
  '@typescript-eslint/no-use-before-define': ['error', {
    ignoreTypeReferences: false
  }],
  '@typescript-eslint/indent': ['error', 2, {
    SwitchCase: 1,
    ArrayExpression: 1,
    MemberExpression: 2,
    CallExpression: {
      arguments: 2
    },
    FunctionExpression: {
      body: 1,
      parameters: 2
    },
    FunctionDeclaration: {
      body: 1,
      parameters: 2
    }
  }],
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/explicit-member-accessibility': ['error', {
    accessibility: 'no-public'
  }],
  '@typescript-eslint/explicit-function-return-type': ['warn', {
    allowExpressions: true,
    allowTypedFunctionExpressions: true
  }],
  '@typescript-eslint/no-empty-interface': ['error', {
    allowSingleExtends: true
  }],
  '@typescript-eslint/no-non-null-assertion': 'off'
};
