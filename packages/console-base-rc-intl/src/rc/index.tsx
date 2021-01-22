import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinTextTertiary,
  mixinBorderSecondaryBottom,
  mixinTypoStrong,
  mixinTypoEm,
  mixinTypoCode,
  mixinTypoKbd
} from '@alicloud/console-base-theme';

import {
  IPropsIntl
} from '../types';
import makeHtmlProps from '../util/make-html-props';
import parseLines from '../util/parse-lines';

import Lines from './lines';

// inline 元素样式
const cssInlineElements = css`
  strong {
    ${mixinTypoStrong}
  }
  
  em {
    ${mixinTypoEm}
  }
  
  code {
    ${mixinTypoCode}
  }
  
  kbd {
    ${mixinTypoKbd}
  }
  
  small {
    font-size: inherit;
    ${mixinTextTertiary}
  }
`;

// block 元素样式
const cssBlockElements = css`
  hr {
    margin: 16px 0;
    border: 0;
    height: 0;
    ${mixinBorderSecondaryBottom}
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
  ${cssInlineElements}
`;

const ScDiv = styled.div`
  line-height: 1.6;
  
  ${cssInlineElements}
  ${cssBlockElements}
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
