/**
 * This component is rendered by the react-dom which belongs to the host,
 * and it only renders an empty div
 * the real widget will be rendered by the dynamicly loaded react-dom
 */
import React, { createElement, Component, createRef } from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import getDisplayName from './getDisplayName'

function withSandbox(ReactDOM) {
  return function(WrappedComponent) {
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
        return (
          <div ref={this.target}></div>
        )
      }
    }
  
    EnhancedComponent.displayName = `withSandbox(${getDisplayName(WrappedComponent)})`
  
    hoistNonReactStatic(EnhancedComponent, WrappedComponent)
    return EnhancedComponent
  }
}

export default withSandbox
