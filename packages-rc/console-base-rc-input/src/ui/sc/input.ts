import styled from 'styled-components';

import {
  SIZE
} from '@alicloud/console-base-theme';

import {
  IPropsScInput
} from '../../model';
import {
  getStyledBorder,
  getStyledShadow
} from '../util';

export default styled.div<IPropsScInput>`
  display: ${props => (props.block ? 'flex' : 'inline-flex')};
  align-items: center;
  position: relative;
  border: 1px solid transparent;
  border-radius: ${props => (props.round ? `${SIZE.HEIGHT_FORM_CONTROL_M}px` : 'none')};
  box-sizing: border-box;
  height: ${SIZE.HEIGHT_FORM_CONTROL_M}px;
  font-size: ${SIZE.FONT_SIZE_BODY}px;
  transition: all 0.3s ease-out;
  ${getStyledBorder}
  ${getStyledShadow}
`;
