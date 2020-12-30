import {
  css
} from 'styled-components';

import {
  typo
} from '@alicloud/console-base-theme';

import {
  IButtonPropsForSc
} from '../types';

export default css<IButtonPropsForSc>`
  ${props => (props.ellipsis ? typo.ellipsis : css`
    white-space: nowrap;
  `)};
`;
