import { useCallback } from 'react';
import { focusDialog } from '../util/push-stack';
import useRefContent from './use-ref-content';
import useRefDialog from './use-ref-dialog';
export default function useDispatchFocus() {
  var refContent = useRefContent();
  var refDialog = useRefDialog();
  return useCallback(function () {
    return focusDialog(refDialog.current, refContent.current);
  }, [refDialog, refContent]);
}