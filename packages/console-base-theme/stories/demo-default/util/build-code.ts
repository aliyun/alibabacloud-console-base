import {
  ICodeGenerator
} from '../types';

export default function buildCode({
  begin,
  body = [],
  end,
  indent = ''
}: ICodeGenerator): string {
  return [begin, ...body.map(v => `${indent}${v}`), end].filter(v => v !== undefined).join('\n');
}
