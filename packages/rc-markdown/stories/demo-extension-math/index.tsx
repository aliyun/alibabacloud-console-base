import React from 'react';
import {
  math,
  mathHtml
} from 'micromark-extension-math';

import {
  MarkdownExtension
} from '../../src';
import {
  MATH
} from '../const';
import Demo from '../_demo';

const extraExtensions: MarkdownExtension[] = [{
  syntax: math(),
  html: mathHtml()
}];

export default function DemoExtensionMath(): JSX.Element {
  return <Demo {...{
    source: MATH,
    options: {
      extraExtensions
    }
  }} />;
}
