import {
  css
} from 'styled-components';

import {
  IButtonPropsForSc
} from '../../types';
import {
  EButtonSize,
  EButtonTheme
} from '../../const';

const THEMES_NEED_BORDER: EButtonTheme[] = [
  EButtonTheme.DANGER,
  EButtonTheme.PRIMARY,
  EButtonTheme.SECONDARY,
  EButtonTheme.SECONDARY_ALT,
  EButtonTheme.TERTIARY,
  EButtonTheme.BRAND_PRIMARY,
  EButtonTheme.BRAND_SECONDARY,
  EButtonTheme.BRAND_SECONDARY_ALT,
  EButtonTheme.BRAND_TERTIARY
];

function needBorder(props: IButtonPropsForSc): boolean {
  return props.size !== EButtonSize.NONE && (props.theme ? THEMES_NEED_BORDER.includes(props.theme) : false);
}

function getBorderRadius(props: IButtonPropsForSc): string {
  return needBorder(props) && props.borderRadius ? '2px' : '0';
}

export default css<IButtonPropsForSc>`
  border: ${props => (needBorder(props) ? '1px solid transparent' : 'none')};
  border-radius: ${getBorderRadius};
`;
