import React from 'react';
import ReactMarkdown, {
  ReactMarkdownProps
} from 'react-markdown';
import gfm from 'remark-gfm';

import {
  ArticleBase
} from '@alicloud/console-base-theme';

/**
 * ReactMarkdown 没有样式，这里给它默认的样式
 */
export default function Markdown({
  plugins = [],
  ...props
}: ReactMarkdownProps): JSX.Element {
  return <ArticleBase>
    <ReactMarkdown {...{
      plugins: [gfm, ...plugins],
      ...props
    }} />
  </ArticleBase>;
}

export type {
  ReactMarkdownProps as MarkdownProps
};
