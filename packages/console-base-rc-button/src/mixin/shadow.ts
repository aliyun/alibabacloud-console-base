import {
  css
} from 'styled-components';

import {
  mixinButtonShadow
} from '@alicloud/console-base-theme';

import {
  IButtonPropsForSc
} from '../types';
import {
  EButtonTheme
} from '../const';

const THEMES_NEED_SHADOW: EButtonTheme[] = [
  EButtonTheme.DANGER,
  EButtonTheme.PRIMARY,
  EButtonTheme.SECONDARY,
  EButtonTheme.BRAND_PRIMARY,
  EButtonTheme.BRAND_SECONDARY
];

function needShadow(props: IButtonPropsForSc): boolean {
  return props.noShadow || props.disabled || props.loading || props.active ? false : THEMES_NEED_SHADOW.includes(props.theme);
}

export default css<IButtonPropsForSc>`
  ${props => (needShadow(props) ? mixinButtonShadow : null)}
`;
