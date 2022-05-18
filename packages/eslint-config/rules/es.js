// es5/6 通用
module.exports = {
  /**
   * 80 - 100 太小了
   */
  'max-len': ['warn', 200, 2, {
    ignorePattern: 'data:image/\\w+;base64,',
    ignoreComments: false,
    ignoreTrailingComments: true,
    ignoreUrls: true,
    ignoreStrings: true,
    ignoreRegExpLiterals: true,
    ignoreTemplateLiterals: true
  }],
  /*
   * eslint-config-ali 用的是 multi-line，且说「多行语句必须用大括号包裹，单行语句推荐用大括号包裹」
   * 但这会导致不一致，且容易在增加代码的时候出错，所以全加
   */
  curly: ['error', 'all'],
  /**
   * https://eslint.org/docs/rules/object-curly-newline
   * 
   * eslint-config-ali 设成了 off
   */
  'object-curly-newline': ['error', {
    ObjectExpression: {
      multiline: true,
      minProperties: 1
    },
    ObjectPattern: {
      multiline: true,
      minProperties: 1
    },
    ImportDeclaration: 'always',
    ExportDeclaration: {
      consistent: true
    }
  }],
  /**
   * https://eslint.org/docs/rules/no-else-return
   * 
   * 这条规则其实可以提高代码的可理解度，但 eslint-config-ali 把它关了
   */
  'no-else-return': ['warn', {
    allowElseIf: false
  }],
  /**
   * 不认为现代的编译器还需要这个
   */
  'eol-last': 'off',
  /**
   * 不论 es5 还是 es6 都不要加额外的逗号，额外的逗号会产生代码风格上的歧义，比如一个对象在写成一行的时候可能如下：
   * 
   * ```
   * { key1: value1, key2: value2 }
   * ```
   * 
   * 而写成多行的时候，会被要求
   * 
   * ```
   * {
   *   key1: value1,
   *   key2: value2,
   * }
   * ```
   * 
   * 所以不要有多余的逗号，那并不属于代码
   */
  'comma-dangle': [
    'error',
    'never'
  ],
  'comma-spacing': ['error', {
    before: false,
    after: true
  }],
  /**
   * eslint-config-ali 把 props 设成了 true，然后加了 ignorePropertyModificationsFor 配置（在我看来 ignorePropertyModificationsFor 只能应用层级来陪）
   */
  'no-param-reassign': ['warn', {
    props: false
  }],
  'no-trailing-spaces': ['error', {
    skipBlankLines: true,
    ignoreComments: true
  }],
  /**
   * anonymous: always -> never
   * 
   * https://eslint.org/docs/rules/space-before-function-paren
   */
  'space-before-function-paren': ['error', {
    anonymous: 'never', // eslint-config-ali 为 'always'
    named: 'never',
    asyncArrow: 'always'
  }],
  'spaced-comment': ['error', 'always'],
  indent: ['error', 2, {
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
   * https://eslint.org/docs/rules/padding-line-between-statements
   *
   * eslint-config-ali 禁用了它..
   */
  'padding-line-between-statements': ['error', {
    blankLine: 'always',
    prev: ['const', 'let', 'var', 'block', 'block-like'],
    next: '*'
  }, {
    blankLine: 'always',
    prev: '*',
    next: ['return', 'throw', 'break', 'continue', 'block', 'block-like', 'export']
  }, {
    blankLine: 'any',
    prev: ['const', 'let', 'var'],
    next: ['const', 'let', 'var']
  }, {
    blankLine: 'any',
    prev: ['export'],
    next: ['export']
  }, {
    blankLine: 'never',
    prev: '*',
    next: ['case', 'default']
  }],
  /**
   * https://eslint.org/docs/rules/padded-blocks
   * 
   * eslint-config-ali 的 level 是 warn
   */
  'padded-blocks': ['error', 'never'],
  /**
   * https://eslint.org/docs/rules/no-multiple-empty-lines
   */
  'no-multiple-empty-lines': ['error', {
    max: 1,
    maxBOF: 0,
    maxEOF: 0
  }]
};
