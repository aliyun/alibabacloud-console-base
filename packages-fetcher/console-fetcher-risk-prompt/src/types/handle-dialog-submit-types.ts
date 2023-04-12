import {
  useDialog
} from '@alicloud/console-base-rc-dialog';

import {
  ERiskType,
  EBindSceneDialogSubmitType
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
  dialogSubmitType: EBindSceneDialogSubmitType.BIND_MFA;
}

export interface ISubSkipBindSubmitMfaProps {
  codeType: string;
  accountId: string;
  dialogSubmitType: EBindSceneDialogSubmitType.SKIP_BIND_MFA;
}

export type TDialogSubmitProps = IOldMainSubmitProps | INewMpkSubmitProps | ISubAuthSubmitProps | ISubBindSubmitMfaProps | ISubSkipBindSubmitMfaProps;
export type THandleRiskPromptDialogSubmitProps = TDialogSubmitProps & {
  contentContext: TContentContext;
  reRequestWithVerifyResult?: TReRequestWithVerifyResult;
}