import React from 'react' // eslint-disable-line
import PropTypes from 'prop-types'
import { useFeature } from '@alicloud/widget-hooks'


function ChannelFeature({
  id,
  activeRegionId,
  determinator,
  fallback = null,
  children
}) {
  if (!useFeature) {
    throw new TypeError(
      'useFeature is undefined, please upgrade @alicloud/widget-hooks to ^0.1.0'
    )
  }

  const show = useFeature(id, activeRegionId, determinator)

  if (show === true) {
    return children
  }
  
  return fallback
}

ChannelFeature.propTypes = {
  id: PropTypes.string.isRequired,
  activeRegionId: PropTypes.string,
  children: PropTypes.node.isRequired,
  determinator: PropTypes.func,
  fallback: PropTypes.node,
}

export default ChannelFeature