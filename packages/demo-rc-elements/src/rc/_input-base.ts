import styled from 'styled-components';

import {
  FORM_INPUT_BDC,
  FORM_INPUT_HEIGHT,
  FORM_INPUT_BDC_HOVER,
  FORM_INPUT_BDC_FOCUS
} from '../const';

const InputBase = styled.input`
  margin: 1px;
  padding: 0 8px;
  border: 1px solid ${FORM_INPUT_BDC};
  box-sizing: border-box;
  outline: none;
  line-height: ${FORM_INPUT_HEIGHT}px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    border-color: ${FORM_INPUT_BDC_HOVER};
  }
  
  &:focus {
    border-color: ${FORM_INPUT_BDC_FOCUS};
  }
`;

export default InputBase;
