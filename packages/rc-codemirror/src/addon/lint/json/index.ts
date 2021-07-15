import codeMirror from 'codemirror';
import {
  Annotation
} from 'codemirror/addon/lint/lint';

import parser from './parser';

interface IHash {
  loc: {
    firstLine: number;
    firstColumn: number;
    lastLine: number;
    lastColumn: number;
  };
}

codeMirror.registerHelper('lint', 'json', (text: string): Annotation[] => {
  const found: Annotation[] = [];
  
  if (!text.trim()) { // 没有内容的时候不要有错误提示
    return found;
  }
  
  // @ts-ignore
  parser.parseError = function(message: string, hash: IHash) {
    const {
      loc
    } = hash;
    
    found.push({
      from: codeMirror.Pos(loc.firstLine - 1, loc.firstColumn), // eslint-disable-line new-cap
      to: codeMirror.Pos(loc.lastLine - 1, loc.lastColumn), // eslint-disable-line new-cap
      message
    });
  };
  
  try {
    parser.parse(text);
  } catch (e) {
    // ignore
  }
  
  return found;
});
