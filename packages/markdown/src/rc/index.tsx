import React from 'react';
import micromark from 'micromark';

import {
  IProps
} from '../types';
import {
  gfm
} from '../plugins';

export default function Rc({
  source,
  allowDangerousHtml
}: IProps): JSX.Element | null {
  if (!source) {
    return null;
  }
  
  const html = micromark(source, {
    allowDangerousHtml,
    extensions: [
      gfm.syntax
    ],
    htmlExtensions: [
      gfm.html
    ]
  });
  
  return <div {...{
    dangerouslySetInnerHTML: {
      __html: html
    }
  }} />;
}
