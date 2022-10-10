import {
  useCallback
} from 'react';

import {
  tutorStepChange
} from '@alicloud/console-base-messenger-tutor';

import {
  ESlsTopic
} from '../enum';

import useDispatchSetStep from './use-dispatch-set-step';
import useOpenKey from './use-open-key';
import useSls from './use-sls';

/**
 * 组件的 step 在这里是受控的，这里的方法将被用作组件的 onTutorStep 回调，即用户通过按钮切换步骤的回调
 */
export default function useHandleTutorStepChange(): (to: number, from: number, source: string) => void {
  const openKey = useOpenKey();
  const dispatchSetStep = useDispatchSetStep();
  const sls = useSls();
  
  return useCallback((to: number, from: number, source: string): void => {
    dispatchSetStep(to);
    sls?.(ESlsTopic.STEP, {
      tutorKey: openKey,
      to,
      from,
      source
    });
    
    tutorStepChange(openKey, to, from);
  }, [openKey, dispatchSetStep, sls]);
}
