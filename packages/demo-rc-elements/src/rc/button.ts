import styled from 'styled-components';

import {
  FORM_CONTROL_BDC_ACTIVE,
  FORM_CONTROL_BGC,
  FORM_CONTROL_BGC_HOVER,
  FORM_CONTROL_BGC_ACTIVE
} from '../const';

import {
  ButtonBase
} from './_form-control-base';

export default styled(ButtonBase)`
  background-color: ${FORM_CONTROL_BGC};
  min-width: 60px;
  border-radius: 4px;
  
  &:hover {
    background-color: ${FORM_CONTROL_BGC_HOVER};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    background-color: ${FORM_CONTROL_BGC_ACTIVE};
    box-shadow: none;
  }
  
  &:focus {
    border-color: ${FORM_CONTROL_BDC_ACTIVE};
  }
  
  &[disabled] {
    box-shadow: none;
  }
`;
