import React from 'react';
import {
  Prism as SyntaxHighlighterPrism
} from 'react-syntax-highlighter';
import styleDark from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';
import styleLight from 'react-syntax-highlighter/dist/esm/styles/prism/material-light';

import {
  ISyntaxHighlighterProps
} from '../types';

export default function SyntaxHighlighter({
  language = 'tsx',
  theme = 'dark',
  ...props
}: ISyntaxHighlighterProps): JSX.Element {
  return <SyntaxHighlighterPrism {...{
    wrapLongLines: true,
    showLineNumbers: true,
    lineProps: { // 不然长行展示中的空格会被挤成没有..
      style: {
        whiteSpace: 'break-spaces'
      }
    },
    ...props,
    language,
    style: theme === 'dark' ? styleDark : styleLight
  }} />;
}
