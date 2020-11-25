import getConsoleConfig from './getConsoleConfig'

// 开通产品
export const OPEN_STATUS = 'OPEN_STATUS'
const getOpenStatusList = () => getConsoleConfig(OPEN_STATUS)

export default getOpenStatusList
