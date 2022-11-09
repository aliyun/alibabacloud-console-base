const rulesEs = require('../rules/es'); // eslint-disable-line @typescript-eslint/no-var-requires
const rulesEs6Only = require('../rules/es6-only'); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  extends: [
    'eslint-config-ali/index'
  ],
  rules: Object.assign({}, rulesEs, rulesEs6Only)
};
