import {
  EUserAskCheckStatus,
  EUserAskSessionCreateStatus
} from './enum';
import {
  IUserAskCategory
} from './common';

export interface IDataUserAskCheckResult {
  status: EUserAskCheckStatus;
  sessionUrl: string;
  categories: IUserAskCategory[];
}

export interface IDataUserAskSessionCreateResult {
  status: EUserAskSessionCreateStatus;
  sessionUrl: string;
}