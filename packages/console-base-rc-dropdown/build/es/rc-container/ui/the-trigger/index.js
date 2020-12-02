import React from 'react';
import { useProps } from '../../../model';
export default function TheTrigger() {
  var _useProps = useProps(),
      trigger = _useProps.trigger;

  return /*#__PURE__*/React.isValidElement(trigger) ? trigger : /*#__PURE__*/React.createElement("span", null, trigger);
}