import styled, {
  css
} from 'styled-components';

import {
  SIZE,
  mixinInputBg,
  mixinInputBgHover,
  mixinInputBgFocus,
  mixinInputBgDisabled,
  mixinInputBorder,
  mixinInputBorderHover,
  mixinInputBorderFocus,
  mixinInputBorderFocusBrand,
  mixinInputBorderDisabled,
  mixinShadowMDown
} from '@alicloud/console-base-theme';

import {
  IPropsScInput
} from '../model';

const cssNormal = css<IPropsScInput>`
  ${mixinInputBg}
  ${props => (props.borderless ? null : mixinInputBorder)}
`;

const cssHover = css<IPropsScInput>`
  ${mixinInputBgHover}
  ${props => (props.borderless ? null : mixinInputBorderHover)}
`;

const cssFocus = css<IPropsScInput>`
  ${mixinInputBgFocus}
  ${props => {
    if (props.borderless) {
      return null;
    }
    
    return props.theme === 'brand' ? mixinInputBorderFocusBrand : mixinInputBorderFocus;
  }}
`;

const cssDisabled = css<IPropsScInput>`
  ${mixinInputBgDisabled}
  ${props => (props.borderless ? null : mixinInputBorderDisabled)}
`;

const cssShadow = css<IPropsScInput>`
  ${props => (!props.disabled && !props.borderless && (props.focused || props.hovered) ? mixinShadowMDown : null)}
`;

export default styled.div<IPropsScInput>`
  display: ${props => (props.block ? 'flex' : 'inline-flex')};
  align-items: center;
  position: relative;
  border: 1px solid transparent;
  border-radius: ${props => (props.round ? `${SIZE.HEIGHT_FORM_CONTROL_M}px` : 'none')};
  box-sizing: border-box;
  height: ${SIZE.HEIGHT_FORM_CONTROL_M}px;
  font-size: ${SIZE.FONT_SIZE_BODY}px;
  transition: all 0.3s ease-out;
  ${cssShadow}
  
  ${props => {
    if (props.disabled) {
      return cssDisabled;
    }
    
    if (props.focused && !props.weakFocusStyle) {
      return cssFocus;
    }
    
    if (props.hovered) {
      return cssHover;
    }
    
    return cssNormal;
  }}
`;