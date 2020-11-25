const rulesEs = require('../rules/es');
const rulesEs6Only = require('../rules/es6-only');

module.exports = {
  extends: [
    'eslint-config-ali/es6'
  ],
  rules: Object.assign({}, rulesEs, rulesEs6Only)
};
