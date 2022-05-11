import React from 'react';

import {
  MarkdownExtension
} from '../../src';
import {
  VARIABLES
} from '../const';
import Demo from '../_demo';

import {
  variables,
  variablesHtml
} from './extension-variables';

const extraExtensions: MarkdownExtension[] = [{
  syntax: variables(),
  html: variablesHtml({
    planet: 'boshi~t',
    'pla}net': 'jianchun.wang'
  })
}];

export default function DemoExtensionVariables(): JSX.Element {
  return <Demo {...{
    source: VARIABLES,
    extraExtensions
  }} />;
}
