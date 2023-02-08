import {
  ICodeGenerator
} from '../types';

export default function pushCode(generator: ICodeGenerator, ...code: string[]): void {
  if (generator.body) {
    generator.body.push(...code);
  } else {
    generator.body = code;
  }
}
