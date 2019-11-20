import React, { Suspense } from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import Skeleton from '@alicloud/widget-skeleton'
import getDisplayName from './getDisplayName'

const withSuspense = suspenseConfig => WrappedComponent => {
  if (suspenseConfig === null) {
    return WrappedComponent
  }

  const {
    skeleton: skeletonProps,
    fallback = <Skeleton {...skeletonProps} />
  } = suspenseConfig

  function EnhancedComponent(props) {
    return (
      <Suspense fallback={fallback}>
        <WrappedComponent
          suspenseFallback={fallback}
          {...props}
        />
      </Suspense>
    )
  }

  EnhancedComponent.displayName = `WithSuspense(${getDisplayName(WrappedComponent)})`
  
  hoistNonReactStatic(EnhancedComponent, WrappedComponent)
  return EnhancedComponent
}

export default withSuspense
