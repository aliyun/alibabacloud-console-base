import createLogger from '../src';

export default createLogger({
  project: 'console-base',
  endpoint: 'cn-hangzhou.log.aliyuncs.com',
  logstore: 'dev',
  defaultParams() {
    return {
      xx: Date.now()
    };
  }
});
