import {
  isValidElement
} from 'react';
import {
  stringify
} from 'json5';

function replacer(_k: string, val: unknown): unknown {
  if (typeof val === 'function') {
    return `✨ ${val.toString().replace(/\n\s*/g, ' ')}`;
  }
  
  if (val instanceof RegExp) {
    return `✨ #RegExp# ${val.toString()}`;
  }
  
  if (isValidElement(val as string)) {
    return '✨ #JSX#';
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
    // json5 stringify 在有 space 的时候一定加 comma dangle 但没有去掉的参数 and i really hate comma dangle..
    return stringify(o, replacer, 2).replace(/,(\n\s*[}\]])/g, '$1');
  } catch (err) {
    return `[ERROR] ${(err as Error).message}`;
  }
}
