import getChannelLinkList from './getChannelLinkList'

const getChannelLink = (key) => {
  const _links = getChannelLinkList()
  if (!_links[key]) {
    throw new Error(`Not found ${key} in channel links`)
  }
  return _links[key]
}

export default getChannelLink
