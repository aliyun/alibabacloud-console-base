module.exports = {
  plugins: [
    'lodash'
  ],
  extends: [
    'plugin:lodash/recommended'
  ],
  rules: require('../rules/lodash')
};
