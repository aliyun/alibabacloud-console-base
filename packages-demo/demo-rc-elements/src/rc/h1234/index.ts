import styled, {
  css
} from 'styled-components';

import {
  CSS_FONT_FAMILY
} from '../../const';

const cssHeading = css`
  position: relative;
  margin: 1em 0;
  padding: 0 0 0 48px;
  font-weight: 400;
  ${CSS_FONT_FAMILY}
  
  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 36px;
    font-weight: 200;
    text-align: center;
    color: #fff;
  }
`;

export const H1 = styled.h1`
  line-height: 2;
  font-size: 18px;
  ${cssHeading}
  
  &:before {
    content: 'H1';
    background-color: #0cf;
  }
`;

export const H2 = styled.h2`
  line-height: 2.2;
  font-size: 16px;
  ${cssHeading}
  
  &:before {
    content: 'H2';
    background-color: #c0f;
  }
`;

export const H3 = styled.h3`
  line-height: 2.4;
  font-size: 14px;
  ${cssHeading}
  
  &:before {
    content: 'H3';
    background-color: #777;
  }
`;

export const H4 = styled.h4`
  line-height: 2.4;
  font-size: 14px;
  ${cssHeading}
  
  &:before {
    content: 'H4';
    background-color: #777;
  }
`;