/**
 * We will get to this as soon as the designer finishing her work
 */
import React from 'react'
import PropTypes from 'prop-types'
import { getWidgetInfo } from '@alicloud/widget-utils-console'

const style = {
  padding: '16px'
}
const buttonStyle = {
  margin: '0 8px',
  color: 'green',
  fontWeight: 'bold'
}

const {
  id = process.env.WIDGET_ID,
  version = process.env.WIDGET_VER,
  loader
} = getWidgetInfo()

function Fallback({error, info, onRecover}) {
  return (
    <div style={style}>
      <h1>Widget Error!
        <button style={buttonStyle} onClick={onRecover}>Recover</button>
      </h1>
      <details>
        <p>
          <strong>ID: </strong>
          <span>{id}</span>
        </p>
        <p>
          <strong>Version: </strong>
          <span>{version}</span>
        </p>
        <p>
          <strong>Loader: </strong>
          <span>{loader}</span>
        </p>
        <p>
          <strong>Message: </strong>
          <span>{error.message}</span>
        </p>
        <p>
          <strong>Component Stack: </strong>
          <span>{info.componentStack}</span>
        </p>
        <p>
          <strong>Error Stack: </strong>
          <span>{error.stack}</span>
        </p>
      </details>
    </div>
  )
}


Fallback.displayName = 'WidgetErrorFallback'
Fallback.propTypes = {
  error: PropTypes.object,
  info: PropTypes.object,
  onRecover: PropTypes.func
}


export default Fallback
