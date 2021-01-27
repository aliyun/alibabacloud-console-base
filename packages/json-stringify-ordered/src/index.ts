/* eslint-disable no-param-reassign */
interface IFnCompare {
  (a: ICompareObject, b: ICompareObject): -1 | 0 | 1;
}

interface IFnReplacer {
  (key: string | number, value: any): any;
}

interface IOpts {
  space?: string | number;
  cycles?: boolean;
  compare?: IFnCompare;
  replacer?: IFnReplacer;
}

interface IOptions {
  space: string;
  cycles: boolean;
  compare?: IFnCompare;
  replacer?: IFnReplacer;
}

interface ICompareObject {
  key: string;
  value: any;
}

function buildOptions(opts: IOpts | IFnCompare = {}): IOptions {
  const options: IOptions = {
    space: '',
    cycles: false,
    compare: undefined,
    replacer: undefined
  };
  
  if (!opts) {
    return options;
  }
  
  if (typeof opts === 'function') {
    options.compare = opts;
    
    return options;
  }
  
  if (typeof opts.space === 'string') {
    options.space = opts.space;
  } else if (typeof opts.space === 'number' && opts.space > 0) {
    options.space = Array(opts.space + 1).join(' ');
  }
  
  if (typeof opts.cycles === 'boolean') {
    options.cycles = opts.cycles;
  }
  
  if (typeof opts.replacer === 'function') {
    options.replacer = opts.replacer;
  }
  
  return options;
}

/**
 * 稳定的 JSON stringify，保证对象「相等」的情况下，给出的字符串是相同的，不论内部的属性顺序
 *
 * 代码采自 https://www.npmjs.com/package/json-stable-stringify
 */
export default function jsonStringifyOrdered(obj: unknown, opts: IOpts | IFnCompare = {}): string {
  const options = buildOptions(opts);
  const {
    space,
    cycles,
    compare,
    replacer
  } = options;
  const compareFn = compare ? function (node: any) {
    return function (a: string, b: string) {
      return compare({
        key: a,
        value: node[a]
      }, {
        key: b,
        value: node[b]
      });
    };
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
    '': obj
  }, '', obj, 0) || '';
}
