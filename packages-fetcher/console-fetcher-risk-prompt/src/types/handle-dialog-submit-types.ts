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

export interface ISubBindSubmitMfaProps {
  dialogSubmitType: 'bind_mfa';
}

export interface ISubSkipBindSubmitMfaProps {
  codeType: string;
  accountId: string;
  dialogSubmitType: 'skip_bind_mfa';
}

export type TDialogSubmitProps = IOldMainSubmitProps | INewMpkSubmitProps | ISubAuthSubmitProps | ISubBindSubmitMfaProps | ISubSkipBindSubmitMfaProps;
export type THandleRiskPromptDialogSubmitProps = TDialogSubmitProps & {
  contentContext: TContentContext;
  reRequestWithVerifyResult?: TReRequestWithVerifyResult;
}