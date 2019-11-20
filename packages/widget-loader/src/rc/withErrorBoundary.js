import React, { Component } from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import getDisplayName from './getDisplayName'
import WidgetErrorLogger from '../utils/logger/error'

const style = {
  padding: '16px'
}

const withErrorBoundary = (options) => (WrappedComponent) => {
  class EnhancedComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        hasError: false,
        error: null,
        info: null
      }
    }

    componentDidCatch(error, info) {
      this.setState({
        hasError: true,
        error,
        info
      })
      // New a logger
      const renderErrorLogger = new WidgetErrorLogger({
        id: options.id,
        version: options.version,
        e_code: 'render',
        e_msg: error.message,
        e_stack: error.stack,
        c_stack: info.componentStack
      }, {
        debug: options.debug
      })
      renderErrorLogger.send()
    }

    render() {
      if (this.state.hasError) {
        return (
          <div style={style}>
            <h1>Widget Error!</h1>
            <details>
              <p>
                <strong>ID: </strong>
                <span>{options.id}</span>
              </p>
              <p>
                <strong>Message: </strong>
                <span>{this.state.error.message}</span>
              </p>
              <p>
                <strong>Component Stack: </strong>
                <span>{this.state.info.componentStack}</span>
              </p>
              <p>
                <strong>Error Stack: </strong>
                <span>{this.state.error.stack}</span>
              </p>
            </details>
          </div>
        )
      }

      return (
        <WrappedComponent {...this.props} />
      )
    }
  }

  EnhancedComponent.displayName = `WithErrorBoundary(${getDisplayName(WrappedComponent)})`

  hoistNonReactStatic(EnhancedComponent, WrappedComponent)
  return EnhancedComponent
}

export default withErrorBoundary
