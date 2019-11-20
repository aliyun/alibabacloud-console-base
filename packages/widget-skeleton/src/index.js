import React, { useLayoutEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

/**
 * 1. 支持自定义背景色
 * 2. 支持自定义条目色
 * 3. 支持自定义条目数量
 * 4. 支持自定义条目高度
 * 5. 条目宽度需要随机计算（支持自定义 min, max）
 * 6. 支持自定义条目间距
 * 7. 支持自定义整体高度
 */

function toNum(val) {
  return parseInt(val) // eslint-disable-line radix
}

function toPixel(num) {
  return `${num}px`
}

const defaultSkeletonStyle = {
  width: '100%',
  backgroundColor: '#fff',
  minWidth: '50px',
  minHeight: '50px',
  backgroundRepeat: 'no-repeat',
  backgroundImage:
    'linear-gradient(#e6e6e6 10px, transparent 0),linear-gradient(#e6e6e6 10px, transparent 0),linear-gradient(#e6e6e6 10px, transparent 0),linear-gradient(#e6e6e6 10px, transparent 0),linear-gradient(#e6e6e6 10px, transparent 0),linear-gradient(#fff 100%, transparent 0)',
  backgroundSize:
    '10px 140px,20px 140px,30px 40px,40px 40px,50px 40px,60px 40px,70px 40px,80px 40px,90px 40px,100px 40px,0% 0%',
  backgroundPosition: '16px 16px,16px 56px,16px 126px,16px 166px,16px 206px,0 0'
}

function Skeleton({
  width,
  height = '240px',
  color = '#e6e6e6',
  backgroundColor = '#fff',
  padding = '24px',
  barHeight = '10px',
  lineHeight = '30px',
  minBarWidth = '200px',
  maxBarWidth,
  mode = 'random', // fill or random
}) {
  // Keep the dom element
  const el = useRef(null)
  const [backgroundImage, setBackgroundImage] = useState('')
  const [backgroundSize, setBackgroundSize] = useState('')
  const [backgroundPosition, setBackgroundPosition] = useState('')

  // Calculate the needed item count
  const itemCount = (() => {
    const leftSpace = toNum(height) - toNum(padding) * 2 - toNum(barHeight)
    const count = Math.ceil(leftSpace / (toNum(barHeight) + toNum(lineHeight)))
    return count
  })()

  useLayoutEffect(() => {
    const { width: totalWidth } = el.current.getBoundingClientRect()

    let tmpBackgroundPosition = '',
      tmpBackgroundImage = '',
      tmpBackgroundSize = ''

    for (let i = 0; i < itemCount; i++) {
      // Calculate the position of every item
      const x = toNum(padding)
      const y = toNum(padding) + i * (toNum(barHeight) + toNum(lineHeight))
      tmpBackgroundPosition += `${toPixel(x)} ${toPixel(y)},`

      // Calculate the width of every item
      const maxWidth =
        maxBarWidth !== undefined
          ? toNum(maxBarWidth)
          : totalWidth - toNum(padding) * 2

      const width =
        mode === 'fill'
          ? maxWidth
          : Math.max(toNum(minBarWidth), Math.random() * maxWidth)
      const height = toNum(barHeight) + toNum(lineHeight)
      tmpBackgroundSize += `${toPixel(width)} ${toPixel(height)},`

      // Calculate background image
      const image = `linear-gradient(${color} ${barHeight}, transparent 0),`
      tmpBackgroundImage += image

      if (i === itemCount - 1) {
        tmpBackgroundPosition += '0 0'
        tmpBackgroundSize += '0% 0%'
        tmpBackgroundImage += 'linear-gradient(#fff 0%, transparent 0)'
      }
    }

    setBackgroundImage(tmpBackgroundImage)
    setBackgroundPosition(tmpBackgroundPosition)
    setBackgroundSize(tmpBackgroundSize)
  }, [
    itemCount,
    barHeight,
    color,
    lineHeight,
    padding,
    mode,
    minBarWidth,
    maxBarWidth
  ])

  const skeletonStyle = {
    ...defaultSkeletonStyle,
    width,
    height,
    backgroundColor,
    backgroundImage,
    backgroundSize,
    backgroundPosition
  }
  return (
    <div
      className="-aliyun-widget-loading-skeleton"
      style={skeletonStyle}
      ref={el}
    />
  )
}

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  padding: PropTypes.string,
  barHeight: PropTypes.string,
  lineHeight: PropTypes.string,
  minBarWidth: PropTypes.string,
  maxBarWidth: PropTypes.string,
  mode: PropTypes.oneOf(['fill', 'random'])
}

export default Skeleton
