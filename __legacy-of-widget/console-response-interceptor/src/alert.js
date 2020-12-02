import React, { useState } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import PropTypes from 'prop-types'
import { Dialog, Slider, Icon } from '@alicloud/console-components'
import CopyToClipboard from 'react-copy-to-clipboard'
import { getLocale } from '@alicloud/one-console-utils'
import { getStylePrefixForWindComponent } from '@alicloud/widget-utils-console'
import getMessages from './locales/messages'

const style = {
  width: '550px',
}
const infoStyle = {
  userSelect: 'text',
}
const footerActions = ['ok']
const messages = getMessages(getLocale())
const style_prefix = (() => {
  try {
    return getStylePrefixForWindComponent()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(
      `"getStylePrefixForWindComponent" is not found, "STYLE_PREFIX" for wind component will fallback to "${process.env.STYLE_PREFIX}", please upgrade "@alicloud/widget-loader" by execute the cmd "npm install @alicloud/widget-loader@latest --save" in your terminal.
      If you are seeing this error message in widget dev environment, then upgrade the "@alicloud/widget-utils-console" to the latest instead.`
    )
    return process.env.STYLE_PREFIX
  }
})()

const copyStyle = {
  color: '#848484',
  cursor: 'pointer',
  marginLeft: '10px',
}
const copyHoverStyle = {
  color: '#4192d8',
  cursor: 'pointer',
  marginLeft: '10px',
}

function Content({ code, message, requestId, ...restProps }) {
  const [isHover, setIsHover] = useState(false)

  function handleMouseEnter() {
    setIsHover(true)
  }

  function handleMouseLeave() {
    setIsHover(false)
  }

  return (
    <div {...restProps}>
      <p style={infoStyle}>
        <strong>Message : </strong>
        {message}
      </p>
      <p style={infoStyle}>
        <strong>Code : </strong>
        {code}
      </p>
      <p style={infoStyle}>
        <strong>Request ID : </strong>
        {requestId}
        <CopyToClipboard text={requestId}>
          <Icon
            type="copy"
            size="small"
            style={isHover ? copyHoverStyle : copyStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </CopyToClipboard>
      </p>
      <br />
    </div>
  )
}
Content.propTypes = {
  code: PropTypes.string,
  message: PropTypes.string,
  requestId: PropTypes.string,
}

const ref = {
  current: null,
  rest: [],
}

function alert(response) {
  if (ref.current !== null) {
    ref.rest.push(response)
    return
  }
  ref.current = response

  const container = document.createElement('div')
  document.body.appendChild(container)

  const unmount = () => {
    unmountComponentAtNode(container)
    container.parentNode.removeChild(container)
    ref.current = null
    const next = ref.rest.shift()
    next && alert(next)
  }

  const { title, ...restMessages } = messages
  const { code, message, requestId, withFailedRequest, data = {} } = response

  const errorContent = (() => {
    if (withFailedRequest !== true) {
      return <Content code={code} message={message} requestId={requestId} />
    }
    return Object.keys(data)
      .filter((key) => data[key] && data[key].Code !== '200')
      .map((key) => data[key])
      .map((item) => (
        <Content
          key={item.RequestId}
          code={item.Code}
          message={item.Message}
          requestId={item.RequestId}
        />
      ))
  })()

  render(
    <Dialog
      visible
      prefix={style_prefix}
      title={title}
      onClose={unmount}
      onCancel={unmount}
      onOk={unmount}
      style={style}
      locale={restMessages}
      footerActions={footerActions}
    >
      <Slider
        prefix={style_prefix}
        arrowPosition="outer"
        prevArrow={<Icon prefix={style_prefix} type="arrow-left" />}
        nextArrow={<Icon prefix={style_prefix} type="arrow-right" />}
      >
        {errorContent}
      </Slider>
    </Dialog>,
    container
  )
}

export default alert
