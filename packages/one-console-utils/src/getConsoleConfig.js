import getGlobalVariable from './getGlobalVariable'

// 控制台配置数据
export const ALIYUN_CONSOLE_CONFIG = 'ALIYUN_CONSOLE_CONFIG'

const getConsoleConfig = (key) => {
  if (typeof key === 'undefined') {
    throw new Error('Config key must be provided')
  }

  const config = getGlobalVariable(ALIYUN_CONSOLE_CONFIG)
  return config && config[key]
}

export default getConsoleConfig
