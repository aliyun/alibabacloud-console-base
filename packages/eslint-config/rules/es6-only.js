module.exports = {
  'arrow-parens': [2, 'as-needed'],
  // 否则 xx.yy?.forEach 会被判定有问题，该规则有 babel 的替代 见 https://github.com/babel/eslint-plugin-babel/issues/185
  'no-unused-expressions': 'off'
};
