module.exports = {
  presets: [
    ['@alicloud/console-toolkit-preset-wind-component', {
      moduleName: '@alicloud/post-message',
      useTypescript: true,
      output: {
        baseDir: 'build',
        dirs: {
          es: 'es',
          cjs: 'cjs',
          umd: 'umd'
        }
      }
    }]
  ]
};
