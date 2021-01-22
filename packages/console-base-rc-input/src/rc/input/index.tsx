import React, {
  FocusEvent,
  ChangeEvent,
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  SIZE,
  mixinTextTertiary,
  mixinInputReset
} from '@alicloud/console-base-theme';

import {
  IProps,
  IPropsScInput
} from '../../types';
import mixinDisabled from '../../util/mixin/disabled';
import mixinNormal from '../../util/mixin/normal';
import mixinHover from '../../util/mixin/hover';
import mixinFocus from '../../util/mixin/focus';
import mixinShadow from '../../util/mixin/shadow';
import mixinTheRealInput from '../../util/mixin/the-real-input';
import renderInner from '../../util/render-inner';

const INNER_HEIGHT_PX = `${SIZE.HEIGHT_FORM_CONTROL_M - 2}px`;

const ScInput = styled.div<IPropsScInput>`
  display: ${props => (props.block ? 'flex' : 'inline-flex')};
  align-items: center;
  position: relative;
  border: 1px solid transparent;
  border-radius: ${props => (props.round ? `${SIZE.HEIGHT_FORM_CONTROL_M}px` : 'none')};
  height: ${INNER_HEIGHT_PX};
  line-height: ${INNER_HEIGHT_PX};
  font-size: ${SIZE.FONT_SIZE_BODY}px;
  transition: all 0.3s ease-out;
  ${mixinShadow}
  
  ${props => {
    if (props.disabled) {
      return mixinDisabled;
    }
    
    if (props.focused && !props.weakFocusStyle) {
      return mixinFocus;
    }
    
    if (props.hovered) {
      return mixinHover;
    }
    
    return mixinNormal;
  }}
`;

// input 有个诡异的宽度，需要一个容器限制一下（然后在 input 上设一个 width: 100%）
const ScInputWrap = styled.span`
  display: block;
  flex: 1;
`;

const ScInputReal = styled.input<IPropsScInput>`
  ${mixinInputReset}
  ${mixinTheRealInput}
`;

const ScInnerExtra = styled.span`
  height: ${INNER_HEIGHT_PX};
  line-height: ${INNER_HEIGHT_PX};
  ${mixinTextTertiary}
`;

const ScInnerLeft = styled(ScInnerExtra)`
  padding-left: ${SIZE.PADDING_X_FORM_CONTROL_M - 1}px;
`;

const ScInnerRight = styled(ScInnerExtra)`
  padding-right: ${SIZE.PADDING_X_FORM_CONTROL_M - 1}px;
`;

export default function Input({
  theme,
  block,
  round,
  borderless,
  disabled,
  innerLeft,
  innerRight,
  weakFocusStyle,
  className,
  style,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onChange,
  ...props
}: IProps): JSX.Element {
  const [stateHovered, setStateHovered] = useState<boolean>(false);
  const [stateFocused, setStateFocused] = useState<boolean>(false);
  
  const handleMouseEnter = useCallback(() => {
    setStateHovered(true);
    
    if (onMouseEnter) {
      onMouseEnter();
    }
  }, [onMouseEnter, setStateHovered]);
  const handleMouseLeave = useCallback(() => {
    setStateHovered(false);
    
    if (onMouseLeave) {
      onMouseLeave();
    }
  }, [onMouseLeave, setStateHovered]);
  const handleFocus = useCallback((e: FocusEvent<HTMLInputElement>) => {
    setStateFocused(true);
    
    if (onFocus) {
      onFocus(e);
    }
  }, [onFocus, setStateFocused]);
  
  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    setStateFocused(false);
    
    if (onBlur) {
      onBlur(e);
    }
  }, [onBlur, setStateFocused]);
  
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(e.target.value, e);
    }
  }, [onChange]);
  
  const jsxInnerL = renderInner(innerLeft, stateFocused, stateHovered);
  const jsxInnerR = renderInner(innerRight, stateFocused, stateHovered);
  
  return <ScInput {...{
    className,
    style,
    theme,
    block,
    round,
    weakFocusStyle,
    borderless,
    disabled,
    hovered: stateHovered,
    focused: stateFocused,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }}>
    {jsxInnerL ? <ScInnerLeft>{jsxInnerL}</ScInnerLeft> : null}
    <ScInputWrap>
      <ScInputReal {...{
        type: 'text',
        'aria-autocomplete': 'none',
        autocomplete: 'off',
        disabled,
        hovered: stateHovered,
        focused: stateFocused,
        ...props,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onChange: handleChange
      }} />
    </ScInputWrap>
    {jsxInnerR ? <ScInnerRight>{jsxInnerR}</ScInnerRight> : null}
  </ScInput>;
}
