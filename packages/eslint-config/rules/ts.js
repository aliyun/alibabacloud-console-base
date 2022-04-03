module.exports = {
  /**
   * TS rules
   * 
   * @link https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
   * 
   * disable eslint base rules so that corresponding @typescript-eslint/xx rules can work without problem
   */
  indent: 'off',
  camelcase: 'off', // → @typescript-eslint/naming-convention
  'comma-dangle': 'off',
  'space-before-blocks': 'off',
  'no-shadow': 'off',
  'no-use-before-define': 'off',
  'no-unused-vars': 'off',
  'no-extra-parens': 'off',
  // now the @typescript-eslint rules
  /**
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
   */
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
  /**
   * eslint-config-ali 关了这个...
   *
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
   */
  '@typescript-eslint/naming-convention': ['error', {
    selector: 'variable',
    format: ['strictCamelCase', 'UPPER_CASE']
  }, {
    selector: 'parameter',
    format: ['strictCamelCase'],
    leadingUnderscore: 'allow'
  }, {
    selector: 'typeLike',
    format: ['StrictPascalCase']
  }, {
    selector: 'memberLike',
    modifiers: ['private'],
    format: ['strictCamelCase'],
    leadingUnderscore: 'allow'
  }, {
    selector: 'enum',
    format: ['StrictPascalCase'],
    prefix: ['E']
  }, {
    selector: 'interface',
    format: ['StrictPascalCase'],
    prefix: ['I']
  }, {
    selector: 'typeAlias',
    format: ['StrictPascalCase'],
    prefix: ['T']
  }, {
    selector: 'enumMember',
    format: ['StrictPascalCase', 'UPPER_CASE'],
    leadingUnderscore: 'allow'
  }],
  /**
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
   */
  '@typescript-eslint/comma-dangle': ['error'],
  /**
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-blocks.md
   */
  '@typescript-eslint/space-before-blocks': ['error'],
  /**
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
   */
  '@typescript-eslint/no-shadow': ['error'],
  /**
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
   */
  '@typescript-eslint/no-use-before-define': ['error', {
    ignoreTypeReferences: false
  }],
  /**
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
   */
  '@typescript-eslint/no-unused-vars': ['error', {
    vars: 'all',
    args: 'after-used',
    ignoreRestSiblings: true
  }],
  /**
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
   */
  '@typescript-eslint/no-extra-parens': ['error', 'all', {
    // 和 no-confusing-arrow 冲突 → https://eslint.org/docs/rules/no-extra-parens#enforceforarrowconditionals
    enforceForArrowConditionals: false,
    // 和 no-mixed-operators 冲突 → https://eslint.org/docs/rules/no-extra-parens#nestedbinaryexpressions
    nestedBinaryExpressions: false
  }],
  // typescript-only rules
  /**
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
   */
  '@typescript-eslint/type-annotation-spacing': ['error'],
  /**
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/member-delimiter-style.md
   */
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
  /**
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
   */
  '@typescript-eslint/explicit-member-accessibility': ['error', {
    accessibility: 'no-public'
  }],
  /**
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
   */
  '@typescript-eslint/explicit-function-return-type': ['warn', {
    allowExpressions: true,
    allowTypedFunctionExpressions: true
  }],
  /**
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-interface.md
   */
  '@typescript-eslint/no-empty-interface': ['error', {
    allowSingleExtends: true
  }],
  /**
   * @link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
   */
  '@typescript-eslint/no-non-null-assertion': 'off'
};
