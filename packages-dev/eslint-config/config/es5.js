const rulesEs = require('../rules/es'); // eslint-disable-line @typescript-eslint/no-var-requires
const rulesEs5Only = require('../rules/es5-only'); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  extends: [
    'eslint-config-ali/es5'
  ],
  rules: Object.assign({}, rulesEs, rulesEs5Only)
};
