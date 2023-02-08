import {
  DialogIndirectPromise
} from '@alicloud/console-base-rc-dialog';

export interface IErrorDialogData {
  page: number;
}

export type TDialogIndirect = DialogIndirectPromise<void, IErrorDialogData>;