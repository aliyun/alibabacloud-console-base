const rulesTs = require('../rules/ts'); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  rules: rulesTs
};
