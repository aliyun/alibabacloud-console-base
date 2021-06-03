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
    ...props,
    language,
    style: theme === 'dark' ? styleDark : styleLight
  }} />;
}
