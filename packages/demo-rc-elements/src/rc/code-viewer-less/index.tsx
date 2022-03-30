import React from 'react';

import {
  IPropsCodeViewerSimple
} from '../../types';
import CodeViewer from '../code-viewer';

export default function CodeViewerLess(props: IPropsCodeViewerSimple): JSX.Element {
  return <CodeViewer {...{
    ...props,
    type: 'less'
  }} />;
}