import React from 'react';

import {
  useHovered,
  useFocused,
  useHandleFocusIn,
  useHandleFocusOut,
  useHandleChange,
  useProps,
  useValue,
  useRefInput
} from '../../../model';
import {
  ScInputWrapper,
  ScInputReal
} from '../../../sc';

export default function TheInput(): JSX.Element {
  const {
    theme,
    block,
    round,
    borderless,
    innerLeft,
    innerRight,
    weakFocusStyle,
    className,
    style,
    hasClear,
    state,
    onMouseEnter,
    onMouseLeave,
    // 以上属性或是容器扩展，或被接管，剔除
    ...props
  } = useProps();
  const refInput = useRefInput();
  const value = useValue();
  const hovered = useHovered();
  const focused = useFocused();
  const handleFocusIn = useHandleFocusIn();
  const handleFocusOut = useHandleFocusOut();
  const handleChange = useHandleChange();
  
  return <ScInputWrapper>
    <ScInputReal {...{
      type: 'text',
      'aria-autocomplete': 'none',
      autocomplete: 'off',
      ...props,
      ref: refInput,
      value,
      hovered,
      focused,
      onFocus: handleFocusIn,
      onBlur: handleFocusOut,
      onChange: handleChange
    }} />
  </ScInputWrapper>;
}
