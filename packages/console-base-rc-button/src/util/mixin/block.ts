import {
  css
} from 'styled-components';

import {
  IButtonPropsForSc
} from '../../types';
import {
  EButtonTheme
} from '../../enum';

const THEMES_BLOCK: EButtonTheme[] = [
  EButtonTheme.MENU
];

function isBlock(props: IButtonPropsForSc): boolean | undefined {
  return (props.theme && THEMES_BLOCK.includes(props.theme)) || props.block;
}

export default css<IButtonPropsForSc>`
  display: ${props => (isBlock(props) ? 'block' : 'inline-block')};
  width: ${props => (isBlock(props) ? '100%' : 'auto')};
`;
