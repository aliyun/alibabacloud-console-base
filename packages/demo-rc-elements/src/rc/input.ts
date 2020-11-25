import styled, {
  css
} from 'styled-components';

import {
  FORM_INPUT_HEIGHT,
  FORM_INPUT_BDC,
  FORM_INPUT_BDC_HOVER,
  FORM_INPUT_BDC_FOCUS
} from '../const';

const cssCommon = css`
  margin: 1px;
  border: 1px solid ${FORM_INPUT_BDC};
  box-sizing: border-box;
  outline: none;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    border-color: ${FORM_INPUT_BDC_HOVER};
  }
  
  &:focus {
    border-color: ${FORM_INPUT_BDC_FOCUS};
  }
`;

export const InputText = styled.input`
  ${cssCommon};
  padding: 0 8px;
  line-height: ${FORM_INPUT_HEIGHT}px;
`;

export const InputTextarea = styled.textarea`
  ${cssCommon};
  display: block;
  padding: 4px 8px;
  box-sizing: border-box;
  width: 100%;
  min-height: 100px;
  line-height: 20px;
  resize: vertical;
`;
