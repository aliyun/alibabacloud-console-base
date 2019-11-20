import { getReleaseFor } from './getRelease'


function getSpecificVersionFromMajor(major = {}, uid) {
  if (typeof major.latest !== 'string') {
    throw new Error(
      `[Widget Loader] Unexpected major object: ${JSON.stringify(major)}`
    )
  }
  const { latest, next = {} } = major
  const { gray, version: grayVersion } = next
  if (
    typeof next === 'object' &&
    typeof gray === 'number' &&
    typeof grayVersion === 'string' &&
    typeof uid === 'string'
  ) {
    const u = Number(uid.substring(uid.length - 2))
    const g = Number(gray)
    if (!Number.isInteger(u))
      throw new Error(`[Widget Loader] Unexpected uid: ${uid}`)
    if (!Number.isInteger(g))
      throw new Error(`[Widget Loader] Unexpected major.next.gray: ${gray}`)
    // gray test
    return u < g ? grayVersion : latest
  } else {
    return latest
  }
}

/**
 * uid is optional and is used to decide whether to take part in gray test
 */
export async function getVersion(loadOptions, uid) {
  if (loadOptions.versionType === 'specific') {
    return loadOptions.version
  }
  const release = await getReleaseFor(loadOptions.id)
  const majorVersion = typeof loadOptions.majorVersionNumber !== 'undefined'  ?
    release[getVersionKey(loadOptions.majorVersionNumber)] :
    getLatestMajorFor(release)

  if (!majorVersion) {
    throw new Error(
      `[Widget Loader] Widget ${loadOptions.id} doesn't have this major version: ${
        loadOptions.majorVersionNumber
      } .
      Please use an exist version!`
    )
  }
  return getSpecificVersionFromMajor(majorVersion, uid)
}


export async function get404FallbackVersion(loadOptions, uid) {
  if (loadOptions.versionType === 'specific') {
    // A wrong specific version will be treated as a corresponding fuzzy version
    // and then to fallback.
    // 1.8.1 -> 1.x
    return getVersion({
      ...loadOptions,
      versionType: 'fuzzy'
    }, uid)
  } else if (loadOptions.versionType === 'fuzzy') {
    // Return the same version and retry once.
    return getVersion(loadOptions, uid)
  } else {
    throw new Error(
      `[Widget Loader] Invalid opts.versionType: ${loadOptions.versionType}`
    )
  }
}

function getVersionKey(versionNumber) {
  return `${versionNumber}.x`
}

function getLatestMajorFor(release) {
  const majorKeys = Object.keys(release)
  const map = majorKeys.reduce((prev, next) => {
    prev[parseInt(next)] = next
    return prev
  }, {})
  const latestMajorNumber = Math.max(
    ...(majorKeys.map(key => parseInt(key)))
  )
  return release[map[latestMajorNumber]]
}

