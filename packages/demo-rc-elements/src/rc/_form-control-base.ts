import styled from 'styled-components';

import {
  CSS_FORM_CONTROL_BASE,
  FORM_CONTROL_HEIGHT,
  FORM_CONTROL_FGC_DISABLED,
  FORM_CONTROL_BGC,
  FORM_CONTROL_BGC_HOVER,
  FORM_CONTROL_BGC_ACTIVE,
  FORM_CONTROL_BGC_DISABLED,
  FORM_CONTROL_BDC,
  FORM_CONTROL_BDC_HOVER,
  FORM_CONTROL_BDC_FOCUS,
  FORM_CONTROL_BDC_ACTIVE,
  FORM_CONTROL_BDC_DISABLED
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
  
  &[disabled],
  &[disabled]:hover,
  &[disabled]:active,
  &[disabled]:focus {
    color: ${FORM_CONTROL_FGC_DISABLED};
    border-color: ${FORM_CONTROL_BDC_DISABLED};
    background-color: ${FORM_CONTROL_BGC_DISABLED};
  }
`;

export const InputBase = styled.input`
  margin: 1px;
  padding: 0 8px;
  border: 1px solid ${FORM_CONTROL_BDC};
  box-sizing: border-box;
  outline: none;
  line-height: ${FORM_CONTROL_HEIGHT}px;
  transition: all 0.3s ease-in-out;
  ${CSS_FORM_CONTROL_BASE}
  
  &:hover {
    border-color: ${FORM_CONTROL_BDC_HOVER};
  }
  
  &:focus {
    border-color: ${FORM_CONTROL_BDC_FOCUS};
  }
  
  &[disabled],
  &[disabled]:hover,
  &[disabled]:focus {
    color: ${FORM_CONTROL_FGC_DISABLED};
    border-color: ${FORM_CONTROL_BDC_DISABLED};
    background-color: ${FORM_CONTROL_BGC_DISABLED};
  }
`;
