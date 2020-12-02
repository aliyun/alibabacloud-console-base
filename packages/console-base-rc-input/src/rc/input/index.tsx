import React, {
  ChangeEvent,
  FocusEvent,
  useState,
  useCallback
} from 'react';
import styled, {
  css
} from 'styled-components';

import {
  COLOR,
  FORM_CONTROL
} from '@alicloud/console-base-styled-mixin';

import {
  TInner,
  TFnInner,
  IProps,
  IPropsLook
} from '../../types';

interface IPropsScInput extends IPropsLook {
  disabled?: boolean;
}

function renderInner(inner: TInner | TFnInner, focused: boolean): TInner | null {
  if (!inner) {
    return null;
  }
  
  if (React.isValidElement(inner) || typeof inner === 'string') {
    return inner;
  }
  
  if (typeof inner === 'function') {
    return inner(focused);
  }
  
  return null;
}

// input 有个诡异的宽度，需要一个容器限制一下（然后在 input 上设一个 width: 100%）
const ScInputWrap = styled.span`
  display: block;
  flex: 1;
`;

const ScInnerInput = styled.input`
  padding: 0 ${FORM_CONTROL.PADDING.M - 4}px;
  border: 0;
  box-sizing: border-box;
  outline: none;
  background: transparent;
  width: 100%;
  color: ${COLOR.TEXT_PRIMARY};
  
  &::placeholder {
    color: ${COLOR.TEXT_DISABLED};
  }
  
  &::-ms-clear {
    display: none;
  }
`;

const ScInnerLeft = styled.span`
  padding-left: ${FORM_CONTROL.PADDING.M - 2}px;
  color: ${COLOR.TEXT_CAPTION};
`;

const ScInnerRight = styled.span`
  padding-right: ${FORM_CONTROL.PADDING.M - 2}px;
  color: ${COLOR.TEXT_CAPTION};
`;

const ScInput = styled.div<IPropsScInput>`
  display: ${props => (props.block ? 'flex' : 'inline-flex')};
  align-items: center;
  position: relative;
  border: 1px solid ${COLOR.LINE};
  height: ${FORM_CONTROL.HEIGHT.M - 2}px;
  line-height: ${FORM_CONTROL.HEIGHT.M - 2}px;
  font-size: ${FORM_CONTROL.FONT_SIZE.M}px;
  transition: all 0.3s ease-out;
  ${props => {
    if (props.disabled) {
      return css`
        background-color: ${COLOR.FILL_LIGHTER};
      `;
    }
  }};
  ${props => {
    if (props.borderless) {
      return css`
        border-color: transparent;
      `;
    }
    
    if (props.disabled) {
      return css`
        border-color: ${COLOR.LINE_LIGHT};
      `;
    }
    
    return css`
      &:hover,
      &:focus {
        border-color: ${COLOR.LINE_DARK};
      }
    `;
  }};
  ${props => (props.round ? css`
    border-radius: ${FORM_CONTROL.HEIGHT.M / 2}px;
  ` : null)};
  
  ${ScInnerInput},
  ${ScInnerLeft},
  ${ScInnerRight} {
    height: ${FORM_CONTROL.HEIGHT.M - 2}px;
    line-height: ${FORM_CONTROL.HEIGHT.M - 2}px;
  }
`;

export default function Input({
  block,
  round,
  borderless,
  disabled,
  innerLeft,
  innerRight,
  className,
  onFocus,
  onBlur,
  onChange,
  style,
  ...props
}: IProps): JSX.Element {
  const [focused, setStateFocused] = useState<boolean>(false);
  
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
  
  const jsxInnerL = renderInner(innerLeft, focused);
  const jsxInnerR = renderInner(innerRight, focused);
  
  return <ScInput {...{
    className,
    block,
    round,
    borderless,
    disabled,
    style
  }}>
    {jsxInnerL ? <ScInnerLeft>{jsxInnerL}</ScInnerLeft> : null}
    <ScInputWrap>
      <ScInnerInput {...{
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
