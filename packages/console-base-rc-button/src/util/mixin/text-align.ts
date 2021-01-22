import {
  css
} from 'styled-components';

import {
  IButtonPropsForSc
} from '../../types';
import {
  EButtonTheme
} from '../../const';

const THEMES_TEXT_ALIGN_LEFT: EButtonTheme[] = [
  EButtonTheme.MENU
];

function getTextAlignLeft(props: IButtonPropsForSc): string {
  if (props.textAlign) {
    return props.textAlign;
  }
  
  if (THEMES_TEXT_ALIGN_LEFT.includes(props.theme)) {
    return 'left';
  }
  
  return 'center';
}

export default css<IButtonPropsForSc>`
  text-align: ${props => getTextAlignLeft(props)};
`;
