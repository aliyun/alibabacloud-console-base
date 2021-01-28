import {
  IOpts,
  IFnCompare,
  IOptions
} from '../types';

export default function buildOptions(opts: IOpts | IFnCompare = {}): IOptions {
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
