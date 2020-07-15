import React, { Suspense } from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import Skeleton from '@ali/widget-skeleton'
import getDisplayName from './getDisplayName'

const withSuspense = (options = {}, lazyToLoad) => (WrappedComponent) => {
  if (options === false) {
    return WrappedComponent
  }

  const {
    skeleton: skeletonProps,
    fallback = <Skeleton {...skeletonProps} />,
  } = options

  function EnhancedComponent(props) {
    return (
      <Suspense fallback={lazyToLoad ? fallback : null}>
        <WrappedComponent suspenseFallback={fallback} {...props} />
      </Suspense>
    )
  }

  EnhancedComponent.displayName = `WithSuspense(${getDisplayName(
    WrappedComponent
  )})`

  hoistNonReactStatic(EnhancedComponent, WrappedComponent)
  return EnhancedComponent
}

export default withSuspense
