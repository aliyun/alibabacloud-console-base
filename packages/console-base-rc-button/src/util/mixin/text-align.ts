import {
  css
} from 'styled-components';

import {
  IButtonPropsForSc
} from '../../types';
import {
  EButtonTheme
} from '../../enum';

const THEMES_TEXT_ALIGN_LEFT: EButtonTheme[] = [
  EButtonTheme.MENU
];

function getTextAlignLeft(props: IButtonPropsForSc): string {
  if (props.textAlign) {
    return props.textAlign;
  }
  
  if (props.theme && THEMES_TEXT_ALIGN_LEFT.includes(props.theme)) {
    return 'left';
  }
  
  return 'center';
}

export default css<IButtonPropsForSc>`
  text-align: ${getTextAlignLeft};
`;
