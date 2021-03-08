import React from 'react';

import Markdown0, {
  MarkdownProps
} from '@alicloud/rc-markdown';
import {
  ArticleBase
} from '@alicloud/console-base-theme-sc-base';

/**
 * 带通用默认的样式的 Markdown
 */
export default function Markdown(props: MarkdownProps): JSX.Element {
  return <ArticleBase>
    <Markdown0 {...props} />
  </ArticleBase>;
}
