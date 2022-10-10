import {
  useCallback
} from 'react';

import {
  ESlsTopic
} from '../enum';

import useOpenKey from './use-open-key';
import useSls from './use-sls';

export default function useHandleTutorAttentionFail(): (value: string) => void {
  const openKey = useOpenKey();
  const sls = useSls();
  
  return useCallback((value: string): void => sls?.(ESlsTopic.ATTENTION_FAILED, {
    tutorKey: openKey,
    value
  }), [openKey, sls]);
}
