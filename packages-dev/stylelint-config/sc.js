module.exports = {
  processors: [
    'stylelint-processor-styled-components'
  ],
  extends: [
    './index',
    'stylelint-config-styled-components'
  ].map(require.resolve),
  rules: {
    'value-keyword-case': ['lower', {
      ignoreKeywords: ['dummyValue']
    }]
  }
};
