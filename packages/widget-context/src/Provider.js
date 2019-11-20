import React from 'react'
import PropTypes from 'prop-types'
import {
  getChannelLinkList,
  getChannelFeatureList
} from '@alicloud/widget-utils-config'
import ConsoleConfigContext from './consoleConfigContext'
import WidgetContext from './widgetContext'

const { Provider: ConsoleConfigProvider } = ConsoleConfigContext
const { Provider: WidgetProvider } = WidgetContext

// TODO: Gonna remove someday
const legacyConsoleConfig = {
  links: getChannelLinkList(),
  features: getChannelFeatureList()
}

function Provider({ state, children }) {
  return (
    <ConsoleConfigProvider value={legacyConsoleConfig}>
      {/* No need to provide these data through Context */}
      {/* Will remove someday later */}
      <WidgetProvider value={state}>
        {children}
      </WidgetProvider>
    </ConsoleConfigProvider>
  )
}

Provider.displayName = 'Widget::GlobalStateProvider'
/* eslint-disable react/forbid-prop-types */
Provider.propTypes = {
  children: PropTypes.element,
  state: PropTypes.object
}

export default Provider
