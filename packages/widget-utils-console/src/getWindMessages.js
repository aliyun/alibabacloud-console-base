/**
 * This method will be excluded by the bundler and
 * be injected by widget-loader at runtime.
 * First, it trys to find the messages from the global window object
 * if it fails, then just returns an empty object.
 * This method only be used in widget dev-environment and
 * in <script> loaded widgets.
 * Dynamicly loaded widgets will get the wind messages from the loader.
 */
import getLocale from './getLocale'

function getWindMessages() {
  const locale = getLocale()
  try {
    const windMessages = window[`wind-v2_${locale.toLowerCase()}`]
    if (!windMessages) {
      throw new Error()
    }
    return windMessages
  } catch (err) {
    return {}
  }
}

export default getWindMessages
