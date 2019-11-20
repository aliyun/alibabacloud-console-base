import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

function Comment({ text }) {
  const el = useRef()
  useEffect(() => {
    el.current.outerHTML = `<!-- ${text} -->`
    return () => {
      el.current.parentNode.removeChild(el.current) //eslint-disable-line
    }
  }, [text])
  return (
    <div ref={el} />
  )
}

Comment.propTypes = {
  text: PropTypes.string.isRequired
}

export default Comment
