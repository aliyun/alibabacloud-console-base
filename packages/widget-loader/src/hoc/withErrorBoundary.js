import React, { Component } from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatic from 'hoist-non-react-statics'
import getDisplayName from './getDisplayName'

const style = {
  padding: '16px',
}

function DefaultErrorFallback(props) {
  return (
    <div style={style}>
      <h1>Component Error!</h1>
      <details>
        <p>
          <strong>ID: </strong>
          <span>{props.id}</span>
        </p>
        <p>
          <strong>Message: </strong>
          <span>{props.message}</span>
        </p>
        <p>
          <strong>Error Stack: </strong>
          <span>{props.stack}</span>
        </p>
        <p>
          <strong>Component Stack: </strong>
          <span>{props.componentStack}</span>
        </p>
      </details>
    </div>
  )
}

DefaultErrorFallback.propTypes = {
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  componentStack: PropTypes.string.isRequired,
}

const withErrorBoundary = (options = {}, id, logger) => (WrappedComponent) => {
  if (options === false) {
    return WrappedComponent
  }

  const { fallback, onError } = options
  const FallbackComponent = fallback || DefaultErrorFallback

  class EnhancedComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        hasError: false,
        error: null,
      }
    }

    componentDidCatch(error, info) {
      // report the error
      logger &&
        logger.send({
          e_phrase: 'render',
          e_msg: error.message,
          e_stack: error.stack,
          c_stack: info.componentStack,
        })

      this.setState(() => ({
        hasError: true,
        error: {
          message: error.message,
          stack: error.stack,
          componentStack: info.componentStack,
        },
      }))

      onError && onError(error, info)
    }

    render() {
      if (this.state.hasError) {
        const data = {
          id,
          message: this.state.error.message,
          stack: this.state.error.stack,
          componentStack: this.state.error.componentStack,
        }

        return <FallbackComponent {...data} />
      }

      return <WrappedComponent {...this.props} />
    }
  }

  EnhancedComponent.displayName = `WithErrorBoundary(${getDisplayName(
    WrappedComponent
  )})`

  hoistNonReactStatic(EnhancedComponent, WrappedComponent)
  return EnhancedComponent
}

export default withErrorBoundary
