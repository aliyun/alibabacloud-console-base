import React from 'react'
import PropTypes from 'prop-types'
import { ConfigProvider } from '@alicloud/console-components'
import {
  getWindMessages,
  getLocale,
  getStylePrefixForWindComponent
} from '@alicloud/widget-utils-console'
import extractWindComponentMessages from './utils/extractWindComponentMessages'


const style_prefix = (() => {
  try {
    return getStylePrefixForWindComponent()
  } catch (e) {
    console.error( // eslint-disable-line no-console
      `"getStylePrefixForWindComponent" is not found, "STYLE_PREFIX" for wind component will fallback to "${process.env.STYLE_PREFIX}", please upgrade "@alicloud/widget-loader" by execute the cmd "npm install @alicloud/widget-loader@latest --save" in your terminal.
      If you are seeing this error message in widget dev environment, then upgrade the "@alicloud/widget-utils-console" to the latest instead.`
    )
    return process.env.STYLE_PREFIX
  }
})()

function configWind(WrappedComponent) {
  function WindConfigSetter({ consoleConfig = {}, ...rest}) {
    const windMessages = (() => {
      if (typeof getWindMessages !== 'function') {
        throw new TypeError(
          'getWindMessages is missing, please upgrade @alicloud/widget-utils-console to 2.x'
        )
      }
      if (Object.keys(getWindMessages()).length) {
        return getWindMessages()
      }
      // Compat with @alicloud/widget-loader < 2.2.0, >= 2.1.0
      return consoleConfig.windMessages || {}
    })()
    const locale = getLocale()
    const configLocale = {
      ...extractWindComponentMessages(windMessages),
      momentLocale: locale
    }

    return (
      <ConfigProvider
        prefix={style_prefix}
        locale={configLocale}
      >
        <WrappedComponent {...rest} />
      </ConfigProvider>
    )
  }

  WindConfigSetter.propTypes = {
    consoleConfig: PropTypes.object
  }

  WindConfigSetter.displayName = 'WindConfigSetter'
  return WindConfigSetter
}

export default configWind
