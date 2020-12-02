import { useEffect } from 'react';
import pushStack from '../../util/push-stack';
import { useStateId, useDialogStackItem } from '../../hook';
/**
 * 全局性事件托管
 */

export default function Stack() {
  var dialogId = useStateId();
  var dialogStackItem = useDialogStackItem();
  useEffect(function () {
    return pushStack(dialogId, dialogStackItem);
  }, [dialogId, dialogStackItem]);
  return null;
}