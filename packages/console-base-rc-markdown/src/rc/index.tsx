import React from 'react';

import {
  MarkdownProps,
  compileIntoHtml
} from '@alicloud/rc-markdown';
import {
  ArticleBase
} from '@alicloud/console-base-theme-sc-base';

/**
 * 带通用默认的样式的 Markdown
 */
export default function Markdown({
  source,
  ...options
}: MarkdownProps): JSX.Element | null {
  if (!source) {
    return null;
  }
  
  // eslint-disable-next-line react/no-danger
  return <ArticleBase dangerouslySetInnerHTML={{
    __html: compileIntoHtml(source, options)
  }} />;
}
