import {
  FlattenInterpolation,
  ThemedStyledProps,
  css
} from 'styled-components';

import {
  mixinInputBg,
  mixinInputBgHover,
  mixinInputBgFocus,
  mixinInputBgDisabled,
  mixinInputBorder,
  mixinInputBorderHover,
  mixinInputBorderFocus,
  mixinInputBorderFocusBrand,
  mixinInputBorderDisabled
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function getStyledBorder(props: IPropsScInput): FlattenInterpolation<ThemedStyledProps<IPropsScInput, any>> {
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
}