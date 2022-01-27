import {
  css
} from 'styled-components';

import {
  mixinInputBg,
  mixinInputBorder
} from '@alicloud/console-base-theme';

import {
  IPropsScInput
} from '../types';

export default css<IPropsScInput>`
  ${mixinInputBg}
  ${props => (props.borderless ? null : mixinInputBorder)}
`;
