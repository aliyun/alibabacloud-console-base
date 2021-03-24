import createLogger from '../src';

export default createLogger({
  project: 'console-base',
  endpoint: 'cn-hangzhou.log.aliyuncs.com',
  logstore: 'dev',
  defaultParams() {
    return {
      fuck: Date.now()
    };
  }
});
