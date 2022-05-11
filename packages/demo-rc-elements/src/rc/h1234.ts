import styled, {
  css
} from 'styled-components';

import {
  CSS_FONT_FAMILY
} from '../const';

const cssHeading = css`
  position: relative;
  margin: 1em 0;
  padding: 0 0 0 48px;
  ${CSS_FONT_FAMILY}
  
  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 36px;
    font-weight: 100;
    text-align: center;
    color: #fff;
  }
`;

export const H1 = styled.h1`
  background-color: #000;
  line-height: 2;
  font-size: 18px;
  color: #fff;
  ${cssHeading}
  
  .theme-dark & {
    background-color: #fff;
    color: #000;
  }
   
  &:before {
    content: 'H1';
    background-color: #0cf;
  }
`;

export const H2 = styled.h2`
  background-color: #333;
  line-height: 2.2;
  font-size: 14px;
  color: #fff;
  ${cssHeading}
  
  .theme-dark & {
    background-color: #ccc;
    color: #000;
  }
  
  &:before {
    content: 'H2';
    background-color: #c0f;
  }
`;

export const H3 = styled.h3`
  background-color: #eee;
  line-height: 2.4;
  font-size: 12px;
  ${cssHeading}
  
  .theme-dark & {
    background-color: #222;
  }
   
  &:before {
    content: 'H3';
    background-color: #666;
  }
`;

export const H4 = styled.h4`
  background-color: #eee;
  line-height: 2;
  font-size: 12px;
  ${cssHeading}
  
  .theme-dark & {
    background-color: #222;
  }
   
  &:before {
    content: 'H4';
    background-color: #666;
  }
`;
