import {
  useEffect
} from 'react';

import {
  onCloseTutor
} from '@alicloud/console-base-messenger-tutor';

import useHandleCloseByMessenger from './use-handle-close-by-messenger';

export default function useEffectOnCloseTutor(): void {
  const handleCloseByMessenger = useHandleCloseByMessenger();
  
  useEffect(() => onCloseTutor(handleCloseByMessenger), [handleCloseByMessenger]);
}
