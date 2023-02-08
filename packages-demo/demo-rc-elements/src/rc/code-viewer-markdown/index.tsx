import React from 'react';

import {
  IPropsCodeViewerSimple
} from '../../types';
import CodeViewer from '../code-viewer';

export default function CodeViewerMarkdown(props: IPropsCodeViewerSimple): JSX.Element {
  return <CodeViewer {...{
    ...props,
    type: 'markdown'
  }} />;
}