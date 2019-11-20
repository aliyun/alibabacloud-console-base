const pat = /^(https?):\/{2}([^/]+)\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/

function parseUrl(url = '') {
  const result = pat.exec(url)
  if (!result) {
    throw new Error(
      `[Widget Loader] Unexpected load url ${url}.`
    )
  }

  return {
    protocal: result[1],
    host: result[2],
    group: result[3],
    name: result[4],
    version: result[5],
    filename: result[6],
    id: `@ali/${result[3]}-${result[4]}`
  }
}

export default parseUrl
