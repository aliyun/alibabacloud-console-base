import React from 'react';

import {
  IPropsCodeViewerSimple
} from '../../types';
import CodeViewer from '../code-viewer';

export default function CodeViewerJs(props: IPropsCodeViewerSimple): JSX.Element {
  return <CodeViewer {...{
    ...props,
    type: 'js'
  }} />;
}