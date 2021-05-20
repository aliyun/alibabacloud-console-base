import styled from 'styled-components';

import {
  CSS_FORM_CONTROL_BASE,
  FORM_CONTROL_BGC,
  FORM_CONTROL_BGC_HOVER,
  FORM_CONTROL_BDC_ACTIVE,
  FORM_CONTROL_BGC_ACTIVE
} from '../const';

export const ButtonBase = styled.button`
  background-color: ${FORM_CONTROL_BGC};
  min-width: 60px;
  ${CSS_FORM_CONTROL_BASE}
  
  &:hover {
    background-color: ${FORM_CONTROL_BGC_HOVER};
  }
  
  &:active {
    background-color: ${FORM_CONTROL_BGC_ACTIVE};
  }
  
  &:focus {
    border-color: ${FORM_CONTROL_BDC_ACTIVE};
  }
`;

export const InputBase = styled.input`
  ${CSS_FORM_CONTROL_BASE}
`;
