module.exports = {
  presets: [
    ['@alicloud/console-toolkit-preset-wind-component', {
      moduleName: '@alicloud/demo-rc-elements',
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
