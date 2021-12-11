import {
  useEffect
} from 'react';

import {
  pushStack
} from '../../util';
import {
  useStateId,
  useDialogStackItem
} from '../../hook';

/**
 * 全局性事件托管
 */
export default function Stack(): null {
  const dialogId = useStateId();
  const dialogStackItem = useDialogStackItem();
  
  useEffect(() => pushStack(dialogId, dialogStackItem), [dialogId, dialogStackItem]);
  
  return null;
}
