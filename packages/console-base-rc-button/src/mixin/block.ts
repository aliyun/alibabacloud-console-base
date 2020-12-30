import {
  css
} from 'styled-components';

import {
  IButtonPropsForSc
} from '../types';

export default css<IButtonPropsForSc>`
  display: ${props => (props.block ? 'block' : 'inline-block')};
  width: ${props => (props.block ? '100%' : 'auto')};
`;
