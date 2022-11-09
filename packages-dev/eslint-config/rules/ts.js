module.exports = {
  /**
   * TS rules
   * 
   * @link https://typescript-eslint.io/rules
   * 
   * disable eslint base rules so that corresponding @typescript-eslint/xx rules can work without problem
   */
  indent: 'off',
  camelcase: 'off', // → @typescript-eslint/naming-convention
  'comma-dangle': 'off',
  'space-before-blocks': 'off',
  'space-infix-ops': 'off',
  'no-shadow': 'off',
  'no-use-before-define': 'off',
  'no-unused-vars': 'off',
  'no-extra-parens': 'off',
  /* ********************************
   * 编码风格
   ******************************** */
  /**
   * @link https://typescript-eslint.io/rules/indent
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
   * @link https://typescript-eslint.io/rules/comma-dangle
   */
  '@typescript-eslint/comma-dangle': ['error', {
    arrays: 'never',
    objects: 'never',
    imports: 'never',
    exports: 'never',
    functions: 'never',
    // ts only
    enums: 'never',
    generics: 'never',
    tuples: 'never'
  }],
  /**
   * @link https://typescript-eslint.io/rules/space-before-blocks
   */
  '@typescript-eslint/space-before-blocks': ['error'],
  /**
   * @link https://typescript-eslint.io/rules/space-infix-ops
   */
  '@typescript-eslint/space-infix-ops': ['error', {
    int32Hint: false
  }],
  /**
   * @link https://typescript-eslint.io/rules/member-delimiter-style
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
   * eslint-config-ali 关了这个...
   *
   * @link https://typescript-eslint.io/rules/naming-convention
   */
  '@typescript-eslint/naming-convention': ['error', {
    selector: 'function',
    format: ['strictCamelCase', 'StrictPascalCase'],
    leadingUnderscore: 'allow'
  }, {
    selector: 'variable',
    format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
    filter: {
      regex: '[A-Z\\d]__[A-Z\\d]',
      match: false
    }
  }, {
    selector: 'parameter',
    format: ['strictCamelCase'],
    leadingUnderscore: 'allow'
  }, {
    selector: 'typeLike',
    format: ['StrictPascalCase']
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
    selector: 'memberLike',
    modifiers: ['private'],
    format: ['strictCamelCase'],
    leadingUnderscore: 'allow'
  }, {
    selector: 'enumMember',
    format: ['StrictPascalCase', 'UPPER_CASE'],
    leadingUnderscore: 'allow',
    filter: {
      regex: '[A-Z\\d]__[A-Z\\d]',
      match: false
    }
  }, { // allow anything in destructured properties
    selector: ['variable', 'parameter'],
    modifiers: ['destructured'],
    format: null
  }],
  /* ********************************
   * no- 系列
   ******************************** */
  /**
   * @link https://typescript-eslint.io/rules/no-shadow
   */
  '@typescript-eslint/no-shadow': ['error'],
  /**
   * @link https://typescript-eslint.io/rules/no-use-before-define
   */
  '@typescript-eslint/no-use-before-define': ['error', {
    ignoreTypeReferences: false
  }],
  /**
   * @link https://typescript-eslint.io/rules/no-unused-vars
   */
  '@typescript-eslint/no-unused-vars': ['error', {
    vars: 'all',
    args: 'after-used',
    ignoreRestSiblings: true
  }],
  /**
   * @link https://typescript-eslint.io/rules/no-extra-parens
   */
  '@typescript-eslint/no-extra-parens': ['error', 'all', {
    // 和 no-confusing-arrow 冲突 → https://eslint.org/docs/rules/no-extra-parens#enforceforarrowconditionals
    enforceForArrowConditionals: false,
    // 和 no-mixed-operators 冲突 → https://eslint.org/docs/rules/no-extra-parens#nestedbinaryexpressions
    nestedBinaryExpressions: false
  }],
  /**
   * @link https://typescript-eslint.io/rules/explicit-member-accessibility
   */
  '@typescript-eslint/explicit-member-accessibility': ['error', {
    accessibility: 'no-public'
  }],
  /**
   * @link https://typescript-eslint.io/rules/no-empty-interface
   */
  '@typescript-eslint/no-empty-interface': ['error', {
    allowSingleExtends: true
  }],
  /**
   * @link https://typescript-eslint.io/rules/no-non-null-assertion
   */
  '@typescript-eslint/no-non-null-assertion': 'warn',
  /**
   * https://typescript-eslint.io/rules/no-unnecessary-condition
   */
  '@typescript-eslint/no-unnecessary-condition': 'warn',
  /* ********************************
   * prefer- 系列
   ******************************** */
  /**
   * https://typescript-eslint.io/rules/prefer-optional-chain
   */
  '@typescript-eslint/prefer-optional-chain': 'error',
  /* ********************************
   * 其他
   ******************************** */
  /**
   * @link https://typescript-eslint.io/rules/type-annotation-spacing
   */
  '@typescript-eslint/type-annotation-spacing': ['error'],
  /**
   * @link https://typescript-eslint.io/rules/explicit-function-return-type
   */
  '@typescript-eslint/explicit-function-return-type': ['warn', {
    allowExpressions: true,
    allowTypedFunctionExpressions: true
  }]
};
