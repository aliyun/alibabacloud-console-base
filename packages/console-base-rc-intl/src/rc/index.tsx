import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-styled-mixin';

import {
  IPropsIntl
} from '../types';
import makeHtmlProps from '../util/make-html-props';
import parseLines from '../util/parse-lines';

import Lines from './lines';

// inline 元素样式
const cssInlineElements = css`
  em {
    font-style: normal;
    color: ${COLOR.TEXT_EMPHASIS};
  }
  
  code {
    padding: 0 4px;
    border-radius: 2px;
    background-color: rgba(0, 0, 0, 0.04);
    color: #f25c7f;
  }
  
  strong {
    font-weight: 600;
  }
  
  kbd {
    display: inline-block;
    padding: 3px 5px;
    border: 1px solid ${COLOR.LINE};
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #bbb;
    background-color: ${COLOR.FILL_LIGHT};
    line-height: 10px;
    font-size: 11px;
    color: ${COLOR.TEXT_SECONDARY};
  }
`;

// block 元素样式
const cssBlockElements = css`
  hr {
    margin: 16px 0;
    border: 0;
    border-bottom: 1px solid ${COLOR.LINE};
    height: 0;
  }
  
  p,
  ul,
  ol {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    line-height: 1.5 !important;
    font-size: inherit;
    
    &:first-child {
      margin-top: 0;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  ul,
  ol {
    margin-left: 2em;
    padding: 0;
    
    li {
      margin-top: 2px;
      
      &:first-child {
        margin-top: 0;
      }
    }
  }
  
  ul {
    list-style: disc outside;
  }
  
  ol {
    list-style: decimal outside;
  }
`;

const ScSpan = styled.span`
  ${cssInlineElements};
`;

const ScDiv = styled.div`
  line-height: 1.6;
  
  ${cssInlineElements};
  ${cssBlockElements};
`;

export default function Intl({
  text,
  html,
  lines
}: IPropsIntl): JSX.Element {
  if (!lines) {
    return html ? <ScSpan {...makeHtmlProps(text)} /> : <ScSpan>{text}</ScSpan>;
  }
  
  return <ScDiv>
    {parseLines(text.split('\n')).map(({
      type,
      items
    }, i) => <Lines {...{
      key: i,
      type,
      items,
      html
    }} />)}
  </ScDiv>;
}
