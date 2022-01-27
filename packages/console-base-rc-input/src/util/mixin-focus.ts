import {
  css
} from 'styled-components';

import {
  mixinInputBgFocus,
  mixinInputBorderFocus,
  mixinInputBorderFocusBrand
} from '@alicloud/console-base-theme';

import {
  IPropsScInput
} from '../types';

export default css<IPropsScInput>`
  ${mixinInputBgFocus}
  ${props => {
    if (props.borderless) {
      return null;
    }
    
    return props.theme === 'brand' ? mixinInputBorderFocusBrand : mixinInputBorderFocus;
  }}
`;
