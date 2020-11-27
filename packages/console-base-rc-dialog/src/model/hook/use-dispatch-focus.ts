import {
  useCallback
} from 'react';

import {
  focusDialog
} from '../util/push-stack';

import useRefContent from './use-ref-content';
import useRefDialog from './use-ref-dialog';

export default function useDispatchFocus(): () => void {
  const refContent = useRefContent();
  const refDialog = useRefDialog();
  
  return useCallback((): void => focusDialog(refDialog.current, refContent.current), [refDialog, refContent]);
}
