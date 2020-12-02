import getConsoleConfig from './getConsoleConfig'

// 站点ID（尽量使用渠道ID，不是使用这个）
export const PORTAL_ID = 'PORTAL_Id'
export default () => getConsoleConfig(PORTAL_ID)
