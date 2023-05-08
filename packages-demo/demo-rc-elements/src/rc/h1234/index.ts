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
    background-color: #f00;
    
    .theme-dark & {
      background-color: #d00;
    }
  }
`;

export const H2 = styled.h2`
  line-height: 2.2;
  font-size: 16px;
  ${cssHeading}
  
  &:before {
    content: 'H2';
    background-color: #f70;
    
    .theme-dark & {
      background-color: #d50;
    }
  }
`;

export const H3 = styled.h3`
  line-height: 2.4;
  font-size: 14px;
  ${cssHeading}
  
  &:before {
    content: 'H3';
    background-color: #ff0;
    color: #333;
    
    .theme-dark & {
      background-color: #dd0;
    }
  }
`;

export const H4 = styled.h4`
  line-height: 2.4;
  font-size: 12px;
  ${cssHeading}
  
  &:before {
    content: 'H4';
    background-color: #0f0;
    color: #333;
    
    .theme-dark & {
      background-color: #0d0;
    }
  }
`;

export const H5 = styled.h5`
  line-height: 2.4;
  font-size: 12px;
  ${cssHeading}
  
  &:before {
    content: 'H5';
    background-color: #0ff;
    color: #333;
    
    .theme-dark & {
      background-color: #0dd;
    }
  }
`;

export const H6 = styled.h6`
  line-height: 2.4;
  font-size: 12px;
  ${cssHeading}
  
  &:before {
    content: 'H6';
    background-color: #00f;
  }
`;
