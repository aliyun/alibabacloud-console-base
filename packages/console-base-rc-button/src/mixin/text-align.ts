import {
  css
} from 'styled-components';

import {
  IButtonPropsForSc
} from '../types';

export default css<IButtonPropsForSc>`
  text-align: ${props => props.textAlign || 'center'};
`;
