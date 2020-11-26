const rulesEs = require('../rules/es');
const rulesEs5Only = require('../rules/es5-only');

module.exports = {
  extends: [
    'eslint-config-ali/es5'
  ],
  rules: Object.assign({}, rulesEs, rulesEs5Only)
};
