import React, {
  FocusEvent,
  ChangeEvent,
  useState,
  useCallback
} from 'react';
import styled, {
  css
} from 'styled-components';

import {
  SIZE,
  mixinTextSecondary,
  mixinTextTertiary,
  mixinTextDisabled,
  mixinShadowMDown,
  mixinInput,
  mixinInputDisabled,
  mixinInputTextHover,
  mixinInputBorderFocus,
  mixinInputBgFocus
} from '@alicloud/console-base-theme';

import {
  TInner,
  TFnInner,
  IProps,
  IPropsLook
} from '../../types';

interface IPropsScInput extends IPropsLook {
  disabled?: boolean;
  hovered: boolean;
  focused: boolean;
}

function renderInner(inner: TInner | TFnInner, focused: boolean, hovered: boolean): TInner | null {
  if (!inner) {
    return null;
  }
  
  if (React.isValidElement(inner) || typeof inner === 'string') {
    return inner;
  }
  
  if (typeof inner === 'function') {
    return inner(focused, hovered);
  }
  
  return null;
}

const INNER_HEIGHT_PX = `${SIZE.HEIGHT_FORM_CONTROL_M - 2}px`;

const ScInput = styled.div<IPropsScInput>`
  display: ${props => (props.block ? 'flex' : 'inline-flex')};
  align-items: center;
  position: relative;
  border-radius: ${props => (props.round ? `${SIZE.HEIGHT_FORM_CONTROL_M / 2}px` : 'none')};
  height: ${INNER_HEIGHT_PX};
  line-height: ${INNER_HEIGHT_PX};
  font-size: ${SIZE.FONT_SIZE_BODY}px;
  transition: all 0.3s ease-out;
  ${mixinInput};
  
  ${props => {
    if (props.disabled) {
      return css`
        ${mixinInputDisabled};
      `;
    }
    
    if (props.focused && !props.weakFocusStyle) {
      return css`
        ${mixinInputTextFocus};
        ${mixinInputBorderFocus};
        ${mixinInputBgFocus};
        ${mixinShadowMDown};
      `;
    }
    
    if (props.hovered) {
      return css`
        ${mixinInputTextHover};
        ${mixinInputBorderHover};
        ${mixinInputBgHover};
        ${mixinShadowMDown};
      `;
    }
  }};
  ${props => {
    if (props.borderless) {
      return css`
        border-color: transparent;
      `;
    }
  }};
`;

// input 有个诡异的宽度，需要一个容器限制一下（然后在 input 上设一个 width: 100%）
const ScInputWrap = styled.span`
  display: block;
  flex: 1;
`;

const ScInputReal = styled.input`
  padding: 0 ${SIZE.PADDING_X_FORM_CONTROL_M - 2}px;
  border: 0;
  box-sizing: border-box;
  outline: none;
  background: transparent;
  width: 100%;
  height: ${INNER_HEIGHT_PX};
  line-height: ${INNER_HEIGHT_PX};
  ${mixinTextSecondary};
  
  &::placeholder {
    ${mixinTextDisabled};
  }
  
  &::-ms-clear {
    display: none;
  }
`;

const ScInnerExtra = styled.span`
  height: ${INNER_HEIGHT_PX};
  line-height: ${INNER_HEIGHT_PX};
  ${mixinTextTertiary};
`;

const ScInnerLeft = styled(ScInnerExtra)`
  padding-left: ${SIZE.PADDING_X_FORM_CONTROL_M - 2}px;
`;

const ScInnerRight = styled(ScInnerExtra)`
  padding-right: ${SIZE.PADDING_X_FORM_CONTROL_M - 2}px;
`;

export default function Input({
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
        ...props,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onChange: handleChange
      }} />
    </ScInputWrap>
    {jsxInnerR ? <ScInnerRight>{jsxInnerR}</ScInnerRight> : null}
  </ScInput>;
}
