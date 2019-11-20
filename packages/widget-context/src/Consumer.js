/**
 * This `Consumer` exsit only for those developers who still want to use
 * React Class instead of React Hooks.
 * Becuase React Hooks can only be called inside a function component,
 * but not a class component.
 */
import React from 'react'
import PropTypes from 'prop-types'
import IntlContext from './intlContext'
import ConsoleConfigContext from './consoleConfigContext'
import WidgetContext from './widgetContext'

/* eslint-disable no-console, max-length */
function Consumer({ children }) {
  return (
    <IntlContext.Consumer>
      {
        (intl) => (
          <ConsoleConfigContext.Consumer>
            {
              (consoleConfig) => (
                <WidgetContext.Consumer>
                  {
                    (state) => {
                      if (state.intl) {
                        console.error(
                          'You should avoid using "intl" as a state name, it will be overrided by @alicloud/console-components-intl.'
                        )
                      }
                      if (state.consoleConfig) {
                        console.error(
                          '"consoleConfig" is used internally by widget itself, find another name for your state.'
                        )
                      }
                      return children({
                        ...state,
                        consoleConfig,
                        intl
                      })
                    }
                  }
                </WidgetContext.Consumer>
              )
            }
          </ConsoleConfigContext.Consumer>
        )
      }
    </IntlContext.Consumer>
  )
}
/* eslint-enable no-console, max-length */

Consumer.propTypes = { children: PropTypes.func }

export default Consumer
