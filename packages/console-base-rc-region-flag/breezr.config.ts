import {
  extendConfiguration
} from '@ali/breezr-preset-wind-component';

import pkgInfo from './package.json';

export default extendConfiguration({
  moduleName: pkgInfo.name,
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
