import {
  css
} from 'styled-components';

import {
  mixinInputBgDisabled,
  mixinInputBorderDisabled
} from '@alicloud/console-base-theme';

import {
  IPropsScInput
} from '../types';

export default css<IPropsScInput>`
  ${mixinInputBgDisabled}
  ${props => (props.borderless ? null : mixinInputBorderDisabled)}
`;
