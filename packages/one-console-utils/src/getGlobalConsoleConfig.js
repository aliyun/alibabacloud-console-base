import getGlobalVariable from './getGlobalVariable'

export const ALIYUN_CONSOLE_GLOBAL = 'ALIYUN_CONSOLE_GLOBAL'

export default (key) => {
  if (typeof key === 'undefined') {
    throw new Error('Config key must be provided')
  }
  const config = getGlobalVariable(ALIYUN_CONSOLE_GLOBAL)
  return config && config[key]
}
