import React from 'react';

import CodeMirror, {
  determineMimeType
} from '@alicloud/rc-codemirror';

import {
  IPropsCodeViewer
} from '../../types';

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