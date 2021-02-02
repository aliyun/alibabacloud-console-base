import {
  css
} from 'styled-components';

import {
  IButtonPropsForSc
} from '../../types';

// loading 的 cursor 在非 disabled 状态下为箭头
export default css<IButtonPropsForSc>`
  cursor: ${props => {
    if (props.disabled) {
      return 'not-allowed';
    }
    
    if (props.loading) {
      return 'default';
    }
    
    return 'pointer';
  }};
`;
