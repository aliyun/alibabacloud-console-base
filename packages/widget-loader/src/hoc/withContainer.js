import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import getDisplayName from './getDisplayName'

const withContainer = (options = {}) => (WrappedComponent) => {
  if (options === false) {
    return WrappedComponent
  }

  function EnhancedComponent(props) {
    const { className, ...restOptions } = options
    const commonClassName = '-widget-container'
    const cns = className ? `${commonClassName} ${className}` : commonClassName

    return (
      <div className={cns} {...restOptions}>
        <WrappedComponent {...props} />
      </div>
    )
  }

  EnhancedComponent.displayName = `withContainer(${getDisplayName(
    WrappedComponent
  )})`
  hoistNonReactStatics(EnhancedComponent, WrappedComponent)

  return EnhancedComponent
}

export default withContainer
