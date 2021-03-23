import React, {
  isValidElement
} from 'react';

import {
  IPropsPreJson
} from '../types';

import Pre from './pre';

function replacer(k: string, val: unknown): unknown {
  if (typeof val === 'function') {
    return `✨ FUNCTION ${val.toString()}`;
  }
  
  if (val instanceof RegExp) {
    return `✨ REGEXP ${val.toString()}`;
  }
  
  if (isValidElement(val as string)) {
    return '# JSX #';
  }
  
  return val;
}

function formatJson(o: unknown): string {
  if (o === undefined) {
    return 'undefined';
  }
  
  try {
    return JSON.stringify(o, replacer, 2).replace(/"([$\w]+)":/g, '$1:');
  } catch (err) {
    return `[ERROR] ${err.message}`;
  }
}

/**
 * 展示简化的 JSON
 */
export default function PreJson({
  o,
  ...props
}: IPropsPreJson): JSX.Element {
  return <Pre {...props}>{formatJson(o)}</Pre>;
}
