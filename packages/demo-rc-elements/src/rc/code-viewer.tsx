import React from 'react';

import CodeMirror, {
  determineMimeType
} from '@alicloud/rc-codemirror';

import {
  IPropsCodeViewer,
  IPropsCodeViewerSimple
} from '../types';

export default function CodeViewer({
  conf,
  children,
  type,
  ...props
}: IPropsCodeViewer): JSX.Element {
  return <CodeMirror {...{
    conf: {
      readOnly: true,
      mode: determineMimeType(type || ''),
      ...conf
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
