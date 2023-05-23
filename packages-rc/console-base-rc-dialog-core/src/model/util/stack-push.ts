import {
  IStackItem
} from '../types';

import stackPut from './stack-put';
import stackPull from './stack-pull';

/**
 * 压栈，每打开一个 Dialog 向各个堆栈中推入一个，并返回出栈方法（可用于 useEffect）
 */
export default function stackPush(dialogId: string, item: IStackItem): () => void {
  stackPut(dialogId, item);
  
  return () => stackPull(dialogId);
}
