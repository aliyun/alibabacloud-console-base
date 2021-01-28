/* eslint-disable no-param-reassign */
import {
  IFnCompare,
  IOpts
} from './types';
import buildOptions from './util/build-options';

/**
 * 稳定的 JSON stringify，保证对象「相等」的情况下，给出的字符串是相同的，不论内部的属性顺序
 *
 * 代码采自 https://www.npmjs.com/package/json-stable-stringify
 */
export default function jsonStringifyOrdered(o: unknown, opts: IOpts | IFnCompare = {}): string {
  const {
    space,
    cycles,
    compare,
    replacer
  } = buildOptions(opts);
  const compareFn = compare ? (node: any) => {
    return (a: string, b: string) => compare({
      key: a,
      value: node[a]
    }, {
      key: b,
      value: node[b]
    });
  } : null;
  const seen: unknown[] = [];
  
  function stringify(parent: unknown, key: string | number, node: any, level: number): string | undefined {
    const indent = space ? (`\n${new Array(level + 1).join(space)}`) : '';
    const colonSeparator = space ? ': ' : ':';
    
    if (node && node.toJSON && typeof node.toJSON === 'function') {
      node = node.toJSON();
    }
    
    if (replacer) {
      node = replacer.call(parent, key, node);
    }
    
    if (node === undefined) {
      return;
    }
    
    if (typeof node !== 'object' || node === null) {
      return JSON.stringify(node);
    }
    
    if (Array.isArray(node)) {
      return `[${node.map((v, i) => `${indent}${space}${stringify(node, i, v, level + 1) || 'null'}`).join(',')}${indent}]`;
    }
    
    if (seen.indexOf(node) !== -1) {
      if (cycles) {
        return JSON.stringify('__cycle__');
      }
      
      throw new TypeError('Converting circular structure to JSON');
    } else {
      seen.push(node);
    }
    
    seen.splice(seen.indexOf(node), 1);
    
    return `{${Object.keys(node).sort(compareFn ? compareFn(node) : undefined).reduce((result: string[], v) => {
      const value = stringify(node, v, node[v], level + 1);
      
      if (value) {
        result.push(`${indent}${space}${JSON.stringify(v)}${colonSeparator}${value}`);
      }
      
      return result;
    }, []).join(',')}${indent}}`;
  }
  
  return stringify({
    '': o
  }, '', o, 0) || '';
}
