import styled from 'styled-components';

import {
  CSS_FONT_FAMILY,
  FORM_INPUT_HEIGHT,
  FORM_BUTTON_BDC,
  FORM_BUTTON_BDC_HOVER,
  FORM_BUTTON_BDC_ACTIVE,
  FORM_BUTTON_BGC,
  FORM_BUTTON_BGC_HOVER,
  FORM_BUTTON_BGC_ACTIVE,
  FORM_INPUT_BDC_FOCUS
} from '../const';

export default styled.button`
  margin: 1px;
  padding: 0 8px;
  border: 1px solid ${FORM_BUTTON_BDC};
  box-sizing: border-box;
  background-color: ${FORM_BUTTON_BGC};
  min-width: 60px;
  line-height: ${FORM_INPUT_HEIGHT}px;
  transition: all 0.3s ease-in-out;
  ${CSS_FONT_FAMILY}
  
  &:hover {
    border-color: ${FORM_BUTTON_BDC_HOVER};
    background-color: ${FORM_BUTTON_BGC_HOVER};
  }
  
  &:active {
    border-color: ${FORM_BUTTON_BDC_ACTIVE};
    background-color: ${FORM_BUTTON_BGC_ACTIVE};
  }
  
  &:focus {
    border-color: ${FORM_INPUT_BDC_FOCUS};
    outline: none;
  }
`;
