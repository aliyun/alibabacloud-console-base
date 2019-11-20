import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useConsoleConfig } from '@alicloud/widget-hooks'
import { getStylePrefixForWindComponent } from '@alicloud/widget-utils-console'


const ChannelLink = ({
  id,
  target,
  className,
  children,
  values,
  shape,
  type,
  size,
  disabled,
  url,
  extra,
}) => {
  const links = useConsoleConfig('links')

  // links data not loaded yet
  if (links === null) {
    return null
  }
  
  let link // 渠道链接地址，如果传递 url 则不使用它

  if (!url) {
    if (typeof id === 'undefined') {
      throw new Error(
        '[ChannelLink] id is required'
      )
    }
    if (!links[id]) {
      throw new Error(`[ChannelLink: ${id}] Can not find links with id: ${id}`)
    }

    link = links[id].replace(/{@?([^}]+)}/g, (match, key) => {
      if (typeof values[key] === 'undefined') {
        throw new Error(`[ChannelLink: ${id}] Need ${key} in values for replacement.`)
      }
      return values[key]
    })
    if (extra) {
      link += extra
    }
  }

  // If the value that we retrieve is none, then we render nothing
  if (link === 'none') {
    return null
  }


  // Here relies on the build tool, commonly is webpack, to change
  // the env variable `STYLE_PREFIX` to a string value.
  const style_prefix = (() => {
    try {
      return getStylePrefixForWindComponent()
    } catch (e) {
      console.error( // eslint-disable-line no-console
        `"getStylePrefixForWindComponent" is not found, "STYLE_PREFIX" for wind component will fallback to "${process.env.STYLE_PREFIX}", please upgrade "@alicloud/widget-loader" by execute the cmd "npm install @alicloud/widget-loader@latest --save" in your terminal.
        If you are seeing this error message in widget dev environment, then upgrade the "@alicloud/widget-utils-console" to the latest instead.`
      )
      return process.env.STYLE_PREFIX
    }
  })()
  const classNames = classnames({
    'channel-link': true,
    [`${style_prefix}btn`]: shape === 'button',
    [`${style_prefix}btn-${type}`]: shape === 'button',
    [`${style_prefix}${size}`]: shape === 'button',
    [`${style_prefix}btn-text ${style_prefix}btn[disabled]`]: shape === 'text' && disabled,
    [className]: className
  })

  const style = {
    cursor: disabled ? 'not-allowed' : 'pointer'
  }
  
  return (
    <a
      style={style}
      className={classNames}
      href={url || link || '#'}
      target={target}
      onClick={(e) => disabled && e.preventDefault()}
      disabled={disabled}
    >
      {children}
    </a>
  )
}

ChannelLink.defaultProps = {
  target: '_blank',
  shape: 'text', // text or button
  type: 'primary',
  size: 'small',
  disabled: false
}

ChannelLink.propTypes = {
  id: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  extra: PropTypes.string,
  children: PropTypes.node.isRequired,
  values: PropTypes.object,
  url: PropTypes.string
}

export default ChannelLink
