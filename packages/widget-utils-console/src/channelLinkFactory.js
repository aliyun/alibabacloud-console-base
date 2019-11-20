export default function channelLinkFactory(getChannelLinkList) {
  return function getChannelLink(id, values) {
    // Validate the input argument id
    if (typeof id === 'undefined') {
      throw new Error(
        '[getChannelLink] Param "id" is required'
      )
    }
  
    const links = getChannelLinkList() || []
  
    if (!links[id]) {
      throw new Error(`[getChannelLink] Can not find links with id: ${id}`)
    }
  
    const link = links[id].replace(/{@?([^}]+)}/g, (match, key) => {
      if (!values[key]) {
        throw new Error(
          `[getChannelLink: ${id}] Need ${key} in values for replacement.`
        )
      }
      return values[key]
    })
  
    return link
  }
}
