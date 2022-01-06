import {
  useEffect
} from 'react';

import {
  useProps,
  useHandleToggleVisible,
  useHandleSetVisibleTrue,
  useHandleSetVisibleFalse
} from '../../../model';

export default function BindEventsToTrigger(): null {
  const {
    trigger
  } = useProps();
  const handleToggleVisible = useHandleToggleVisible();
  const handleSetVisibleTrue = useHandleSetVisibleTrue();
  const handleSetVisibleFalse = useHandleSetVisibleFalse();
  
  useEffect(() => {
    if (!trigger) {
      return;
    }
    
    trigger.addEventListener('click', handleToggleVisible);
    trigger.addEventListener('mouseenter', handleSetVisibleTrue);
    trigger.addEventListener('mouseleave', handleSetVisibleFalse);
    
    return () => {
      trigger.removeEventListener('click', handleToggleVisible);
      trigger.removeEventListener('mouseenter', handleSetVisibleTrue);
      trigger.removeEventListener('mouseleave', handleSetVisibleFalse);
    };
  }, [trigger, handleToggleVisible, handleSetVisibleTrue, handleSetVisibleFalse]);
  
  return null;
}