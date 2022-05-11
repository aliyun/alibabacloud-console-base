import {
  IStack
} from '../types';

import stackCreate from './stack-create';

let STACK: IStack | null = null;

export default function stackGet(): IStack {
  STACK ??= stackCreate();
  
  return STACK;
}