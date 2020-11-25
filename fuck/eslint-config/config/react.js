const rulesEs = require('../rules/es');
const rulesEs6Only = require('../rules/es6-only');
const rulesReact = require('../rules/react');

module.exports = {
  extends: [
    'eslint-config-ali/react'
  ],
  rules: Object.assign({}, rulesEs, rulesEs6Only, rulesReact)
};
