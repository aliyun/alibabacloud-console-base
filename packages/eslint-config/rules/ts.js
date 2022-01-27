module.exports = {
  /**
   * TS rules
   * 
   * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
   * 
   * disable eslint base rules so that corresponding @typescript-eslint/xx rules can work without problem
   * 
   * - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
   * - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
   * - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
   * - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
   * - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
   * - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
   */
  indent: 'off',
  'comma-dangle': 'off',
  'no-shadow': 'off',
  'no-use-before-define': 'off',
  'no-unused-vars': 'off',
  'no-extra-parens': 'off',
  // now the @typescript-eslint rules
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
  '@typescript-eslint/comma-dangle': ['error'],
  '@typescript-eslint/no-shadow': ['error'],
  '@typescript-eslint/no-use-before-define': ['error', {
    ignoreTypeReferences: false
  }],
  '@typescript-eslint/no-unused-vars': ['error', {
    vars: 'all',
    args: 'after-used',
    ignoreRestSiblings: true
  }],
  '@typescript-eslint/no-extra-parens': ['error', 'all', {
    // 和 no-confusing-arrow 冲突 → https://eslint.org/docs/rules/no-extra-parens#enforceforarrowconditionals
    enforceForArrowConditionals: false,
    // 和 no-mixed-operators 冲突 → https://eslint.org/docs/rules/no-extra-parens#nestedbinaryexpressions
    nestedBinaryExpressions: false
  }],
  // typescript-only rules
  '@typescript-eslint/type-annotation-spacing': ['error'],
  '@typescript-eslint/member-delimiter-style': ['error', {
    multiline: {
      delimiter: 'semi',
      requireLast: true
    },
    singleline: {
      delimiter: 'semi',
      requireLast: true
    }
  }],
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
