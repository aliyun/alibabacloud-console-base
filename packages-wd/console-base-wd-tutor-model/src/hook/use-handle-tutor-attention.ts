import {
  useCallback
} from 'react';

import {
  ESlsTopic
} from '../enum';

import useOpenKey from './use-open-key';
import useSls from './use-sls';

/**
 * 微教程内部的 :tutor-attention 点击，记录 SLS 日志
 */
export default function useHandleTutorAttention(): (value: string) => void {
  const openKey = useOpenKey();
  const sls = useSls();
  
  return useCallback((value: string): void => sls?.(ESlsTopic.ATTENTION, {
    tutorKey: openKey,
    value
  }), [openKey, sls]);
}
