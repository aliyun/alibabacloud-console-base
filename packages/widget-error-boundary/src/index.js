import React from 'react'
import WidgetErrorLogger from './logger'
import DefaultErrorFallback from './Fallback'


function createErrorBoundary(widgetId, Fallback = DefaultErrorFallback) {
  return function withErrorBoundary(WrappedComponent) {
    class WidgetErrorBoundary extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          hasError: false,
          error: null,
          info: null
        }
        this.handleRecover = this.handleRecover.bind(this)
      }

      componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true, error, info })
        // You can also log the error to an error reporting service
        const logger = new WidgetErrorLogger({
          id: widgetId,
          e_msg: error.message,
          e_stack: error.stack,
          c_stack: info.componentStack
        })
        logger.send()
      }

      handleRecover() {
        this.setState({ hasError: false, error: null, info: null })
      }

      render() {
        if (this.state.hasError && Fallback !== null) {
          return <Fallback
            error={this.state.error}
            info={this.state.info}
            onRecover={this.handleRecover}
          />
        }
        return (
          <WrappedComponent {...this.props} />
        )
      }
    }

    return WidgetErrorBoundary
  }
}

export default createErrorBoundary
