import {
  css
} from 'styled-components';

import {
  mixinButtonShadow
} from '@alicloud/console-base-theme';

import {
  IButtonPropsForSc
} from '../../types';
import {
  EButtonTheme
} from '../../const';

const THEMES_NEED_SHADOW: EButtonTheme[] = [
  EButtonTheme.DANGER,
  EButtonTheme.PRIMARY,
  EButtonTheme.SECONDARY,
  EButtonTheme.BRAND_PRIMARY,
  EButtonTheme.BRAND_SECONDARY
];

function needShadow(props: IButtonPropsForSc): boolean {
  if (props.noShadow || props.disabled || props.loading || props.active) {
    return false;
  }
  
  return props.theme ? THEMES_NEED_SHADOW.includes(props.theme) : false;
}

export default css<IButtonPropsForSc>`
  ${props => (needShadow(props) ? mixinButtonShadow : null)}
`;
