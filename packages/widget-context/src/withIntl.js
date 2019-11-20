import React from 'react'
import WindIntlProvider from '@alicloud/console-components-intl/lib/Provider'
import {
  getWindMessages,
  getLocale,
} from '@alicloud/widget-utils-console'
import { getWidgetI18nMessages } from '@alicloud/widget-utils-config'
import IntlContext from './intlContext'

const { Consumer: WindIntlConsumer } = WindIntlProvider
const messages = {
  ...getWindMessages(),
  ...getWidgetI18nMessages()
}

function withIntl(WrappedComponent) {
  function IntlProvider(props) {
    return (
      <WindIntlProvider messages={messages} locale={getLocale()}>
        <WindIntlConsumer>
          {({ intl }) => (
            <IntlContext.Provider value={intl}>
              <WrappedComponent {...props} />
            </IntlContext.Provider>
          )}
        </WindIntlConsumer>
      </WindIntlProvider>
    )
  }

  IntlProvider.displayName = 'IntlProvider'
  return IntlProvider
}

export default withIntl
