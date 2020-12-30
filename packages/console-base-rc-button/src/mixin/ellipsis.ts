import {
  css
} from 'styled-components';

import {
  typo
} from '@alicloud/console-base-theme';

import {
  IButtonPropsForSc
} from '../types';
import {
  EButtonTheme
} from '../const';

const THEMES_NEED_ELLIPSIS: EButtonTheme[] = [
  EButtonTheme.MENU
];

const cssNoWrap = css`
  white-space: nowrap;
`;

function needEllipsis(props: IButtonPropsForSc): boolean {
  return props.ellipsis ?? THEMES_NEED_ELLIPSIS.includes(props.theme);
}

export default css<IButtonPropsForSc>`
  ${props => (needEllipsis(props) ? typo.ellipsis : cssNoWrap)};
`;
