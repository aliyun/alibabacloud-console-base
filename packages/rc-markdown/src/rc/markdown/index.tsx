import React from 'react';

import {
  IMarkdownProps
} from '../../types';
import {
  compileIntoHtml
} from '../../util';

export default function Markdown({
  source,
  options,
  ...props
}: IMarkdownProps): JSX.Element | null {
  if (!source) {
    return null;
  }
  
  // eslint-disable-next-line react/no-danger
  return <div {...props} dangerouslySetInnerHTML={{
    __html: compileIntoHtml(source, options)
  }} />;
}
