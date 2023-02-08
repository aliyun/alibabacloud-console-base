import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinBorderSecondaryBottom,
  mixinTypoElementsInline,
  mixinTypoElementsList
} from '@alicloud/console-base-theme';
import HtmlTrusted from '@alicloud/console-base-rc-html-trusted';

import {
  IIntlProps
} from '../types';
import {
  parseLines
} from '../util';

import Lines from './lines';

// block 元素样式
// p 的 min-height: 1px 是为了能让空行占高
const cssBlockElements = css`
  hr {
    margin: 16px 0;
    border: 0;
    height: 0;
    ${mixinBorderSecondaryBottom}
  }
  
  p {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    min-height: 1px;
    line-height: 1.5 !important;
    font-size: inherit;
    
    &:first-child {
      margin-top: 0;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ScDiv = styled.div`
  line-height: 1.6;
  ${mixinTypoElementsInline}
  ${mixinTypoElementsList}
  ${cssBlockElements}
`;

export default function Intl({
  text,
  html,
  lines
}: IIntlProps): JSX.Element {
  if (!lines) {
    return html ? <HtmlTrusted text={text} /> : <span>{text}</span>;
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
