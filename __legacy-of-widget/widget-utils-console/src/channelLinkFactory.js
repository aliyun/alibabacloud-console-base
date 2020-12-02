export default function channelLinkFactory(getChannelLinkList) {
  return function getChannelLink(id, values = {}) {
    // Validate the input argument id
    if (typeof id === 'undefined') {
      throw new Error(
        '[getChannelLink] Param "id" is missing, you must specify the param to tell which link you want to get.'
      )
    }

    const links = getChannelLinkList() || []

    if (!links[id]) {
      console &&
        console.error(
          // eslint-disable-line no-console
          `[getChannelLink] Can not find link with id: ${id}. Please check your CWS(http://cws.aliyun-inc.com/widget/my) configuration for channel link.
        Caution: If you see this error message, your channel link might be broken.`
        )
    }

    const link = links[id].replace(/{@?([^}]+)}/g, (match, key) => {
      if (typeof values[key] === 'undefined') {
        console &&
          console.error(
            // eslint-disable-line no-console
            `[getChannelLink: ${id}] Found an interpolation in the url: ${key}, but no corresponding replacement value was provided.
          Caution: If you see this error message, your channel link might be broken.`
          )
        return match
      }
      return values[key]
    })

    return link
  }
}
