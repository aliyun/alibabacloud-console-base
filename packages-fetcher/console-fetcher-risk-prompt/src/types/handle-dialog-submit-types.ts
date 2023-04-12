import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  ERiskType
} from '../enum';

import {
  IDialogData
} from './dialog-data-types';
import {
  IRiskPromptResolveData,
  TReRequestWithVerifyResult
} from './risk-prompt-props';

export type TContentContext = Omit<ReturnType<typeof useDialog<IRiskPromptResolveData, IDialogData>>, 'forceUpdate'>;

export interface IOldMainSubmitProps {
  verifyType: string;
  dialogSubmitType: ERiskType.OLD_MAIN;
}

export interface INewMpkSubmitProps {
  codeType: string;
  accountId: string;
  verifyType: string;
  dialogSubmitType: ERiskType.MPK;
}

export interface ISubAuthSubmitProps {
  dialogSubmitType: ERiskType.NEW_SUB;
}

export type TDialogSubmitProps = IOldMainSubmitProps | INewMpkSubmitProps | ISubAuthSubmitProps;
export type THandleRiskPromptDialogSubmitProps = TDialogSubmitProps & {
  contentContext: TContentContext;
  reRequestWithVerifyResult?: TReRequestWithVerifyResult;
}