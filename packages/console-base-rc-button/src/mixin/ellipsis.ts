import {
  css
} from 'styled-components';

import {
  typo
} from '@alicloud/console-base-theme';

import {
  IButtonPropsForSc
} from '../types';

const cssNoWrap = css`
  white-space: nowrap;
`;

export default css<IButtonPropsForSc>`
  ${props => (props.ellipsis ? typo.ellipsis : cssNoWrap)};
`;
