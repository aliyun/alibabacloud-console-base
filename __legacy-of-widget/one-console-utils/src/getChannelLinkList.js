import getConsoleConfig from './getConsoleConfig'

// 渠道链接
export const LINKS = 'CHANNEL_LINKS'

const getChannelLinkList = () => getConsoleConfig(LINKS)

export default getChannelLinkList
