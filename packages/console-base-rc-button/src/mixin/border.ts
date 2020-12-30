import {
  css
} from 'styled-components';

import {
  IButtonPropsForSc
} from '../types';
import {
  EButtonSize,
  EButtonTheme
} from '../const';

const THEMES_NEED_BORDER: EButtonTheme[] = [
  EButtonTheme.DANGER,
  EButtonTheme.PRIMARY,
  EButtonTheme.SECONDARY,
  EButtonTheme.TERTIARY,
  EButtonTheme.BRAND_PRIMARY,
  EButtonTheme.BRAND_SECONDARY,
  EButtonTheme.BRAND_TERTIARY
];

function needBorder(props: IButtonPropsForSc): boolean {
  return props.size !== EButtonSize.NONE && THEMES_NEED_BORDER.includes(props.theme);
}

function getBorderRadius(props: IButtonPropsForSc): string {
  return needBorder(props) && props.borderRadius ? '2px' : '0';
}

export default css<IButtonPropsForSc>`
  border: ${props => (needBorder(props) ? 'none' : '1px solid transparent')};
  border-radius: ${props => getBorderRadius(props)};
`;
