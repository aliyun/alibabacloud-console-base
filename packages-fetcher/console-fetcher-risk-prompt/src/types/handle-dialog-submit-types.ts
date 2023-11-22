import type {
  DialogContext
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
import {
  TSetRiskCanceledErrorProps
} from './risk-prompt-types';

export type TContentContext = Omit<DialogContext<IRiskPromptResolveData, IDialogData>, 'forceUpdate'>;

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
  setRiskCanceledErrorProps: TSetRiskCanceledErrorProps;
  reRequestWithVerifyResult?: TReRequestWithVerifyResult;
}