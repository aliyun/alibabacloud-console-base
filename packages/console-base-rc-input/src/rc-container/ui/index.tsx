import React from 'react';

import {
  useProps,
  useHovered,
  useFocused,
  useHandleMouseEnter,
  useHandleMouseLeave
} from '../../model';
import ScInput from '../../sc/input';

import InnerLeft from './inner-left';
import TheInput from './the-input';
import InnerRight from './inner-right';
import InnerRightStatus from './inner-right-status';

export default function Ui(): JSX.Element {
  const {
    theme,
    block,
    round,
    borderless,
    disabled,
    weakFocusStyle,
    className,
    style
  } = useProps();
  const hovered = useHovered();
  const focused = useFocused();
  const handleMouseEnter = useHandleMouseEnter();
  const handleMouseLeave = useHandleMouseLeave();
  
  return <ScInput {...{
    className,
    style,
    theme,
    block,
    round,
    weakFocusStyle,
    borderless,
    disabled,
    hovered,
    focused,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }}>
    <InnerLeft />
    <TheInput />
    <InnerRight />
    <InnerRightStatus />
  </ScInput>;
}
