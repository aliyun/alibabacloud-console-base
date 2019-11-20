const pat = /^([^/]+\/)?([^-]+)-(.+)$/

function parseId(widgetId) {
  const ret = pat.exec(widgetId)
  if (!ret)
    throw new Error(
      `[Widget Loader] Unexpected widgetId ${widgetId}.`
    )
  return {
    group: ret[2],
    name: ret[3]
  }
}

export default parseId
