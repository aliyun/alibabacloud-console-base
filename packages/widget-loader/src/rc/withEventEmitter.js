import React from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import getEventEmitter from '../utils/common/eventEmitter'
import getDisplayName from './getDisplayName'

function withEventEmitter(WrappedComponent) {
  const eventEmitter = getEventEmitter()

  function EnhancedComponent(props) {
    return (
      <WrappedComponent eventEmitter={eventEmitter} {...props} />
    )
  }

  EnhancedComponent.displayName = `WithEventEmitter(${getDisplayName(WrappedComponent)})`

  hoistNonReactStatic(EnhancedComponent, WrappedComponent)
  return EnhancedComponent
}

export default withEventEmitter
