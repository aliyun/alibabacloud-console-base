import {
  css
} from 'styled-components';

import {
  IButtonPropsForSc
} from '../types';

const cssCursorLoading = css`
  cursor: default;
`;

// loading 的 cursor 在非 disabled 状态下为箭头
function needDefaultCursor(props: IButtonPropsForSc): boolean {
  return props.loading && !props.disabled;
}

export default css<IButtonPropsForSc>`
  ${props => (needDefaultCursor(props) ? cssCursorLoading : null)}
`;
