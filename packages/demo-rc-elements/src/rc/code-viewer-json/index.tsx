import React from 'react';

import {
  IPropsCodeViewerSimple
} from '../../types';
import CodeViewer from '../code-viewer';

export default function CodeViewerJson(props: IPropsCodeViewerSimple): JSX.Element {
  return <CodeViewer {...{
    ...props,
    type: 'json'
  }} />;
}