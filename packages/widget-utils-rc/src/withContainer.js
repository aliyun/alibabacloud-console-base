import React from 'react'
import { getStylePrefixForWindComponent } from '@alicloud/widget-utils-console'


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

function withContainer(WrappedComponent) {
  return function WidgetContainer(props) {
    // The leading "-" sign of the classname was added to lower
    // the chance of classname collision.
    return (
      <div className={`-${style_prefix}normalize`}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default withContainer
