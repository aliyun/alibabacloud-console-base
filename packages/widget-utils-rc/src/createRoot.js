import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import omit from 'lodash/omit'
import { withIntl, Provider } from '@alicloud/widget-context'
import createErrorBoundary from '@alicloud/widget-error-boundary'
import logState from './utils/logState'
import withContainer from './withContainer'
import configWind from './configWind'


function createRoot({
  id,
  stateHandlers,
  errorFallback
}) {
  const enhance = compose(
    withContainer, // Add a container for widget, with classname `-process.env.STYLE_PREFIXnormalize`.
    configWind, // Support wind base components's internationlization.
    withIntl, // Provide `intl` for its decendants.
    createErrorBoundary(id, errorFallback),
    withStateHandlers(stateHandlers.initialState, stateHandlers.stateUpdaters),
  )

  return function(WidgetComponent) {
    function WrappedComponent(props) {
      // Take out the state
      const state = omit(props, ['className', 'fixFooter', 'suspenseFallback'])
      // Log state to console in dev environment
      logState(state)
      // Strip out global states and their updaters
      const restProps = omit(
        props,
        [
          'suspenseFallback',
          ...Object.keys(stateHandlers.initialState({})),
          ...Object.keys(stateHandlers.stateUpdaters)
        ]
      )
      // Render the root component
      return (
        <Provider
          state={state}
          options={{
            widgetId: id
          }}
        >
          <WidgetComponent {...restProps} />
        </Provider>
      )
    }

    WrappedComponent.displayName = 'Widget::Root'

    const EnhancedComponent = enhance(WrappedComponent)
    EnhancedComponent.displayName = id

    return EnhancedComponent
  }
}

export default createRoot
