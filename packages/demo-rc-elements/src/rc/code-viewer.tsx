import React from 'react';

import CodeMirror from '@alicloud/rc-codemirror';

interface IPropsSimple {
  children?: string;
}

interface IProps extends IPropsSimple {
  type?: 'json' | 'js' | 'ts' | 'html' | 'css' | 'less' | 'text';
}

function getMode(type: IProps['type']): string | undefined {
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
  children,
  type
}: IProps): JSX.Element {
  return <CodeMirror {...{
    conf: {
      mode: getMode(type),
      readOnly: true
    },
    value: typeof children === 'string' ? children : 'Error: children should be a string value'
  }} />;
}

export function CodeViewerHtml(props: IPropsSimple): JSX.Element {
  return <CodeViewer {...{
    ...props,
    type: 'html'
  }} />;
}

export function CodeViewerJson(props: IPropsSimple): JSX.Element {
  return <CodeViewer {...{
    ...props,
    type: 'json'
  }} />;
}

export function CodeViewerJs(props: IPropsSimple): JSX.Element {
  return <CodeViewer {...{
    ...props,
    type: 'js'
  }} />;
}

export function CodeViewerTs(props: IPropsSimple): JSX.Element {
  return <CodeViewer {...{
    ...props,
    type: 'ts'
  }} />;
}

export function CodeViewerLess(props: IPropsSimple): JSX.Element {
  return <CodeViewer {...{
    ...props,
    type: 'less'
  }} />;
}
