import {
  useEffect
} from 'react';

import useHandlePushStack from './use-handle-push-stack';

/**
 * 全局性事件托管
 */
export default function useEffectPushStack(): void {
  const handlePushStack = useHandlePushStack();
  
  useEffect(() => handlePushStack(), [handlePushStack]);
}
