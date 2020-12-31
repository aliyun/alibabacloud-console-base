import {
  css
} from 'styled-components';

import {
  mixinShadowMDown
} from '@alicloud/console-base-theme';

import {
  IPropsScInput
} from '../../types';

function needShadow(props: IPropsScInput): boolean {
  return !props.disabled && !props.borderless && (props.focused || props.hovered);
}

export default css<IPropsScInput>`
  ${props => (needShadow(props) ? mixinShadowMDown : null)}
`;
