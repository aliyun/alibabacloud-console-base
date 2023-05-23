import {
  DialogContext,
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IDialogResult
} from '../types';

export default function useOpDialog(): DialogContext<IDialogResult, IDialogData> {
  return useDialog<IDialogResult, IDialogData>();
}
