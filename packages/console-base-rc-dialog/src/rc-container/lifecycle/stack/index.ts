import {
  useEffect
} from 'react';

import {
  useHandlePushStack
} from '../../../model';

/**
 * 全局性事件托管
 */
export default function Stack(): null {
  const handlePushStack = useHandlePushStack();
  
  useEffect(() => handlePushStack(), [handlePushStack]);
  
  return null;
}
