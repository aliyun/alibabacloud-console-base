module.exports = {
  extends: [
    './config/es5'
  ].map(require.resolve)
};