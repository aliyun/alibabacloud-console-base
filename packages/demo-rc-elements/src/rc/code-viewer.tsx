import React from 'react';

import CodeMirror from '@alicloud/rc-codemirror';

import {
  IPropsCodeViewer,
  IPropsCodeViewerSimple
} from '../types';

function getMode(type: IPropsCodeViewer['type']): string | undefined {
  switch (type) {
    case 'json':
      return 'application/json';
    case 'js':
      return 'application/javascript';
    case 'ts':
      return 'application/typescript';
    case 'html':
      return 'text/html';
    case 'css':
    case 'less':
      return 'text/x-less';
    default:
      break;
  }
}

export default function CodeViewer({
  conf,
  children,
  type,
  ...props
}: IPropsCodeViewer): JSX.Element {
  return <CodeMirror {...{
    conf: {
      ...conf,
      mode: getMode(type),
      readOnly: true
    },
    ...props,
    value: typeof children === 'string' ? children : 'Error: children should be a string value'
  }} />;
}

export function CodeViewerHtml(props: IPropsCodeViewerSimple): JSX.Element {
  return <CodeViewer {...{
    ...props,
    type: 'html'
  }} />;
}

export function CodeViewerJson(props: IPropsCodeViewerSimple): JSX.Element {
  return <CodeViewer {...{
    ...props,
    type: 'json'
  }} />;
}

export function CodeViewerJs(props: IPropsCodeViewerSimple): JSX.Element {
  return <CodeViewer {...{
    ...props,
    type: 'js'
  }} />;
}

export function CodeViewerTs(props: IPropsCodeViewerSimple): JSX.Element {
  return <CodeViewer {...{
    ...props,
    type: 'ts'
  }} />;
}

export function CodeViewerLess(props: IPropsCodeViewerSimple): JSX.Element {
  return <CodeViewer {...{
    ...props,
    type: 'less'
  }} />;
}
