import request from './request'
import widgetCache from './widgetCache'
import widgetStore from './widgetStore'
import getConfigHost from './getConfigHost'


async function startFetchReleaseProcess() {
  let res
  const releaseCacheKey = 'release'

  try {
    if (!widgetCache.get(releaseCacheKey)) {
      const url = `${getConfigHost()}/${releaseCacheKey}.json`
      widgetCache.set(releaseCacheKey, request.get(url, {
        timeout: 5000 // 5 seconds fallback to standby
      }))
    }
    res = await widgetCache.get(releaseCacheKey)
  } catch (err) {
    // If the previous promise has been rejected
    const rejected = await widgetCache.get(releaseCacheKey).catch(() => true)
    if (rejected === true) {
      const url = `${getConfigHost(true)}/${releaseCacheKey}.json`
      widgetCache.set(releaseCacheKey, request.get(url, {
        timeout: 5000
      }))
    }

    res = await widgetCache.get(releaseCacheKey)
  }

  // Keep the environment information of widget
  const inWidgetPreEnv = res.headers['x-widget-env'] === 'dev' ? true : false
  if (widgetStore.get('inWidgetPreEnv') === undefined) {
    widgetStore.set('inWidgetPreEnv', inWidgetPreEnv)
  }

  return res.data
}

// Prevent parallel request
let fetchReleaseProcess = null 
function fetchRelease() {
  if (!fetchReleaseProcess) {
    fetchReleaseProcess = startFetchReleaseProcess()
  }
  return fetchReleaseProcess
}

let releaseCache = null
async function getRelease() {
  if (!releaseCache) {
    releaseCache = await fetchRelease()
  }
  return releaseCache
}

export async function getReleaseFor(id) {
  const release = await getRelease()
  const widgetRelease = release[id]
  if (!widgetRelease) {
    throw new Error(`[Widget Loader] There is no release for ${id}.`)
  }
  return widgetRelease
}
