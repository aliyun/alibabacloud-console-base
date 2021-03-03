import {
  css
} from 'styled-components';

import {
  mixinTypoNoWrap,
  mixinTypoEllipsis
} from '@alicloud/console-base-theme';

import {
  IButtonPropsForSc
} from '../../types';
import {
  EButtonTheme
} from '../../const';

const THEMES_NEED_ELLIPSIS: EButtonTheme[] = [
  EButtonTheme.MENU
];

function needEllipsis(props: IButtonPropsForSc): boolean {
  return props.ellipsis ?? (props.theme ? THEMES_NEED_ELLIPSIS.includes(props.theme) : false);
}

export default css<IButtonPropsForSc>`
  ${props => (needEllipsis(props) ? mixinTypoEllipsis : mixinTypoNoWrap)}
`;
