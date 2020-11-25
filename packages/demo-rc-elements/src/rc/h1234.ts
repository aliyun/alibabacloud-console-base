import styled, {
  css
} from 'styled-components';

import {
  CSS_FONT_FAMILY
} from '../const';

const cssHeading = css`
  position: relative;
  margin: 2em 0 1em 0;
  padding: 0 0 0 40px;
  line-height: 2;
  ${CSS_FONT_FAMILY};
  
  &:first-child {
    margin-top: 0;
  }
      
  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 32px;
    font-weight: 100;
    text-align: center;
    color: #fff;
  }
`;

export const H1 = styled.h1`
  ${cssHeading};
  background-color: #000;
  font-size: 18px;
  color: #fff;
   
  &:before {
    content: 'H1';
    background-color: #0cf;
  }
`;

export const H2 = styled.h2`
  ${cssHeading};
  background-color: #333;
  font-size: 14px;
  color: #fff;
  
  &:before {
    content: 'H2';
    background-color: #c0f;
  }
`;

export const H3 = styled.h3`
  ${cssHeading};
  background-color: #eee;
  font-size: 12px;
   
  &:before {
    content: 'H3';
    background-color: #666;
  }
`;

export const H4 = styled.h4`
  ${cssHeading};
  background-color: #eee;
  font-size: 12px;
   
  &:before {
    content: 'H4';
    background-color: #666;
  }
`;
