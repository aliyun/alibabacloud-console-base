import React, { createElement, Component, createRef } from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import getDisplayName from './getDisplayName'

function withLocalRender(options = false, ReactDOM) {
  return function (WrappedComponent) {
    if (options === false || !ReactDOM) {
      return WrappedComponent
    }

    class EnhancedComponent extends Component {
      constructor(props) {
        super(props)
        this.target = createRef()
      }

      componentDidMount() {
        ReactDOM.render(
          createElement(WrappedComponent, this.props),
          this.target.current
        )
      }

      componentDidUpdate() {
        ReactDOM.render(
          createElement(WrappedComponent, this.props),
          this.target.current
        )
      }

      componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.target.current)
      }

      render() {
        return <div ref={this.target} />
      }
    }

    EnhancedComponent.displayName = `withLocalRender(${getDisplayName(
      WrappedComponent
    )})`

    hoistNonReactStatic(EnhancedComponent, WrappedComponent)
    return EnhancedComponent
  }
}

export default withLocalRender
