import React, { Suspense, lazy } from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import getDisplayName from './rc/getDisplayName'

function preload(promiseThatHasWidgetContained) {
  const Widget = lazy(async () => await promiseThatHasWidgetContained)

  function Preload(props) {
    // Widgets that need preload shouldn't have any visible fallback,
    // so we set it to `null`.
    return (
      <Suspense fallback={null}>
        <Widget suspenseFallback={null} {...props} />
      </Suspense>
    )
  }

  Preload.displayName = `Preload(${getDisplayName(Widget)})`

  hoistNonReactStatic(Preload, Widget)
  return Preload
}

export default preload
