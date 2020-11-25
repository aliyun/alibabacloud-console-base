import React from 'react';

import Pre from './pre';

interface IProps {
  o: unknown;
}

function formatJson(o: unknown): string {
  try {
    return JSON.stringify(o, null, 2).replace(/"([$\w]+)":/g, '$1:');
  } catch (err) {
    return `[ERROR] ${err.message}`;
  }
}

/**
 * 展示简化的 JSON
 */
export default function CleanJson({
  o
}: IProps): JSX.Element {
  return <Pre>{formatJson(o)}</Pre>;
}
