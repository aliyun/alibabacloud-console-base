import styled from 'styled-components';

import {
  FORM_CONTROL_BDC,
  FORM_CONTROL_HEIGHT,
  FORM_CONTROL_BDC_HOVER,
  FORM_CONTROL_BDC_FOCUS
} from '../const';

const InputBase = styled.input`
  margin: 1px;
  padding: 0 8px;
  border: 1px solid ${FORM_CONTROL_BDC};
  box-sizing: border-box;
  outline: none;
  line-height: ${FORM_CONTROL_HEIGHT}px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    border-color: ${FORM_CONTROL_BDC_HOVER};
  }
  
  &:focus {
    border-color: ${FORM_CONTROL_BDC_FOCUS};
  }
`;

export default InputBase;
