import {
  isValidElement
} from 'react';
import {
  stringify
} from 'json5';

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

/**
 * 简化的 JSON
 */
export default function json5Stringify(o: unknown): string {
  if (o === undefined) {
    return 'undefined';
  }
  
  try {
    return stringify(o, replacer, 2);
  } catch (err) {
    return `[ERROR] ${(err as Error).message}`;
  }
}
