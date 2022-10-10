import {
  useCallback
} from 'react';

import {
  tutorAction
} from '@alicloud/console-base-messenger-tutor';

import {
  ESlsTopic
} from '../enum';

import useOpenKey from './use-open-key';
import useSls from './use-sls';

/**
 * 微教程内部的 :tutor-action 点击，以事件的形式通知应用
 */
export default function useHandleTutorAction(): (value: string) => void {
  const openKey = useOpenKey();
  const sls = useSls();
  
  return useCallback((value: string): void => {
    sls?.(ESlsTopic.ACTION, {
      tutorKey: openKey,
      value
    });
    
    tutorAction(openKey, value);
  }, [openKey, sls]);
}
