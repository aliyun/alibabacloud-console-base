import {
  css
} from 'styled-components';

import {
  IButtonPropsForSc
} from '../../types';

function getCursor(props: IButtonPropsForSc): string {
  if (props.disabled) {
    return 'not-allowed';
  }
  
  if (props.loading) {
    return 'default';
  }
  
  return props.cursor || 'pointer';
}

// loading 的 cursor 在非 disabled 状态下为箭头
export default css<IButtonPropsForSc>`
  cursor: ${getCursor};
`;
