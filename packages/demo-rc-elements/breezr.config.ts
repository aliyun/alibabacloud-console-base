import {
  extendConfiguration
} from '@alicloud/console-toolkit-preset-component';

export default extendConfiguration({
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
});
