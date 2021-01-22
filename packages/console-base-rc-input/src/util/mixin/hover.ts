import {
  css
} from 'styled-components';

import {
  mixinInputBgHover,
  mixinInputBorderHover
} from '@alicloud/console-base-theme';

import {
  IPropsScInput
} from '../../types';

export default css<IPropsScInput>`
  ${mixinInputBgHover}
  ${props => (props.borderless ? null : mixinInputBorderHover)}
`;
