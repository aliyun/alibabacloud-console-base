import React from 'react';

import {
  IPropsMarkdown
} from '../../types';
import {
  compileIntoHtml
} from '../../util';

export default function Markdown({
  source,
  ...options
}: IPropsMarkdown): JSX.Element | null {
  if (!source) {
    return null;
  }
  
  return <div {...{
    dangerouslySetInnerHTML: {
      __html: compileIntoHtml(source, options)
    }
  }} />;
}
