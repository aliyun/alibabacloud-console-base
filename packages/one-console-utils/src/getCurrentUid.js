import getConsoleConfig from './getConsoleConfig'

// 当前账号 UID
export const CURRENT_PK = 'CURRENT_PK'
export default () => getConsoleConfig(CURRENT_PK)
