import {
  css
} from 'styled-components';

import {
  SIZE,
  mixinInputTextDisabled,
  mixinInputText,
  mixinInputTextHover,
  mixinInputTextFocus
} from '@alicloud/console-base-theme';

import {
  IPropsScInput
} from '../../types';

const INNER_HEIGHT_PX = `${SIZE.HEIGHT_FORM_CONTROL_M - 2}px`;

export default css<IPropsScInput>`
  padding: 0 ${SIZE.PADDING_X_FORM_CONTROL_M - 2}px;
  border: 0;
  width: 100%;
  height: ${INNER_HEIGHT_PX};
  line-height: ${INNER_HEIGHT_PX};
  
  ${props => {
    if (props.disabled) {
      return mixinInputTextDisabled;
    }
    
    if (props.focused) {
      return mixinInputTextFocus;
    }
    
    if (props.hovered) {
      return mixinInputTextHover;
    }
    
    return mixinInputText;
  }}
`;
