import getConsoleConfig from './getConsoleConfig'

export const IS_CERTIFIED = 'IS_CERTIFIED'
export default () => getConsoleConfig(IS_CERTIFIED) === 'true'
