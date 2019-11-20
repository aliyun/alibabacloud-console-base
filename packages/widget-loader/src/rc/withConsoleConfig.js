import React from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import getDisplayName from './getDisplayName'
import PropTypes from 'prop-types'

const withConsoleConfig = config => WrappedComponent => {
  function EnhancedComponent({ consoleConfig, ...rest }) {
    // eslint-disable-next-line no-console
    consoleConfig && console.error(
      '[Widget] "consoleConfig" is used internally by widget-core, ' +
      'please choose another prop name for your widget.'
    )
    return (
      <WrappedComponent consoleConfig={config} {...rest} />
    )
  }

  EnhancedComponent.displayName = `WithConsoleConfig(${getDisplayName(WrappedComponent)})`
  EnhancedComponent.propTypes = {
    consoleConfig: PropTypes.any
  }

  hoistNonReactStatic(EnhancedComponent, WrappedComponent)
  return EnhancedComponent
}

export default withConsoleConfig
