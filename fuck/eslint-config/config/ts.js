const rulesTs = require('../rules/ts');

module.exports = {
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  rules: rulesTs
};
