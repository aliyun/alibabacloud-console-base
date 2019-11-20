import { DEFAULT_OPTIONS } from '../cons'
import { fuzzyVersionPattern, specificVersionPattern } from '../cons'

function parseOption(loadOptions) {
  if (
    typeof loadOptions === 'object' &&
    typeof loadOptions.id === 'string' &&
    typeof loadOptions.version === 'string'
  ) {
    const opts = {
      ...DEFAULT_OPTIONS,
      ...loadOptions
    }

    const matchFuzzy = opts.version.match(fuzzyVersionPattern)
    if (matchFuzzy !== null) {
      opts.versionType = 'fuzzy'
      opts.majorVersionNumber = Number(matchFuzzy[1])
      return opts
    }

    const matchSpecific = opts.version.match(specificVersionPattern)
    if (matchSpecific !== null) {
      opts.versionType = 'specific'
      opts.majorVersionNumber = Number(matchSpecific[1])
      return opts
    }

    throw new Error(
      `[Widget Loader] Invalid version is passed to loadWidget().
      Correct usage: loadWidget({ id: 'xxx', version: '1.x' }) or loadWidget({ id: 'xxx', version: '1.2.3' }).
      Currently passed version: ${opts.version}`
    )
  }

  throw new TypeError(
    `[Widget Loader] loadWidget option should be an object with shape: {id: string, version: string}.
    But get ${JSON.stringify(loadOptions)}`
  )
}

export default parseOption
