import {
  extendConfiguration
} from '@alicloud/console-toolkit-preset-component';

import pkgInfo from './package.json';

export default extendConfiguration({
  moduleName: pkgInfo.name,
  useTypescript: true,
  output: {
    baseDir: 'build',
    dirs: {
      es: 'esm',
      cjs: 'cjs',
      umd: 'umd'
    }
  }
});
