import React from 'react';

import {
  json5Stringify
} from '../../util';
import CodeViewerJson from '../code-viewer-json';

interface IProps {
  o: unknown;
}

/**
 * 展示简化的 JSON
 */
export default function PreJson({
  o
}: IProps): JSX.Element {
  return <CodeViewerJson>{json5Stringify(o)}</CodeViewerJson>;
}
