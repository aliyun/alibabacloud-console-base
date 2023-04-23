import {
  InputHTMLAttributes,
  useMemo
} from 'react';

import useModelProps from './_use-model-props';
import useValue from './use-value';
import useHovered from './use-hovered';
import useFocused from './use-focused';
import useHandleFocusIn from './use-handle-focus-in';
import useHandleFocusOut from './use-handle-focus-out';
import useHandleCompositionStart from './use-handle-composition-start';
import useHandleCompositionEnd from './use-handle-composition-end';
import useHandleChange from './use-handle-change';

export default function usePropsForInputElement(): InputHTMLAttributes<HTMLInputElement> {
  const props = useModelProps();
  const value = useValue();
  const hovered = useHovered();
  const focused = useFocused();
  const handleFocusIn = useHandleFocusIn();
  const handleFocusOut = useHandleFocusOut();
  const handleChange = useHandleChange();
  const handleCompositionStart = useHandleCompositionStart();
  const handleCompositionEnd = useHandleCompositionEnd();
  
  return useMemo(() => {
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
      status,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      onChange,
      onFocusedChange,
      onHoveredChange,
      // 以上属性或是容器扩展，或被接管，剔除
      ...rest
    } = props;
    
    return {
      type: 'text',
      'aria-autocomplete': 'none',
      autocomplete: 'off',
      ...rest,
      value,
      hovered,
      focused,
      onFocus: handleFocusIn,
      onBlur: handleFocusOut,
      onCompositionStart: handleCompositionStart,
      onCompositionEnd: handleCompositionEnd,
      onChange: handleChange
    };
  }, [props, value, hovered, focused, handleFocusIn, handleFocusOut, handleCompositionStart, handleCompositionEnd, handleChange]);
}
