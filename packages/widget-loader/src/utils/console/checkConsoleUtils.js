import { getBasicUtils } from '@alicloud/widget-utils-console'


const FALLBACK_CONSOLE_UTILS = {
  getParentUid: function() { return '00' },
  getCurrentUid: function() { return '00' },
  getAccountType: function() { return 'main' },
  getChannel: function() { return 'OFFICAIL' },
  getLang: function() { return 'zh' },
  getLocale: function() { return 'zh-CN' },
  getRegionName: function(id) { return id },
  getZoneName: function(id) { return id }
}

function checkConsoleUtils(consoleUtils) {
  const resultConsoleUtils = { ...consoleUtils }
  const requiredConsoleUtilNames = Object.keys(getBasicUtils())

  // Check
  /* eslint-disable no-console */
  for (const name of requiredConsoleUtilNames) {
    if (!consoleUtils[name]) {
      console.warn(`[createLoader] "${name}" is required in "dependencies['@alicloud/widget-utils-console']" parameter but missing. Fallback to: 

  ${FALLBACK_CONSOLE_UTILS[name].toString()}

  This will be problematic if the fallback util is not suit for your case, but you can always provide your own implementation to avoid such issue.
        
  createLoader({
    dependencies: {
      '@alicloud/widget-utils-console': {
        ${name}: xxx, // Your implementation here.
      }
    }
  })`)

      // Override with the default utils
      resultConsoleUtils[name] = FALLBACK_CONSOLE_UTILS[name]
    }

    if (typeof resultConsoleUtils[name] !== 'function') {
      throw new TypeError(
        `[createLoader] Expect ${name} to be a function.`
      )
    }
  }

  return resultConsoleUtils
}

export default checkConsoleUtils
