import useConsoleConfig from './useConsoleConfig'

function useChannelLink(id, values) {
  const links = useConsoleConfig('links')
  if (links === null) {
    return ''
  }
  if (typeof id === 'undefined') {
    throw new Error(
      '[ChannelLink] id is required'
    )
  }
  if (!links[id]) {
    throw new Error(`[ChannelLink] Can not find links with id: ${id}`)
  }

  const link = links[id].replace(/{@?([^}]+)}/g, (match, key) => {
    if (!values[key]) {
      throw new Error(`[ChannelLink: ${id}] Need ${key} in values for replacement.`)
    }
    return values[key]
  })
  
  return link
}

export default useChannelLink