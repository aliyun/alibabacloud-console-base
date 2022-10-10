import {
  Dispatch
} from 'react';

import {
  LoadingStatus
} from '@alicloud/console-base-rc-loading';
import {
  DataTutorDetail
} from '@alicloud/console-base-types-data-tutor';

import {
  EAction
} from '../enum';

interface IPayloadSetTutorDetailValue<V> {
  key: string;
  value: V;
}

export interface IPayloadSetTutorDetailLoading extends IPayloadSetTutorDetailValue<LoadingStatus> {}

export interface IPayloadSetTutorDetailData extends IPayloadSetTutorDetailValue<DataTutorDetail> {}

export interface IPayloadSetTutorDetailError extends IPayloadSetTutorDetailValue<Error> {}

export type TModelAction = {
  type: EAction.SET_OPEN_KEY;
  payload: string;
} | {
  type: EAction.SET_STEP;
  payload: number;
} | {
  type: EAction.SET_TUTOR_DETAIL_LOADING;
  payload: IPayloadSetTutorDetailLoading;
} | {
  type: EAction.SET_TUTOR_DETAIL_DATA;
  payload: IPayloadSetTutorDetailData;
} | {
  type: EAction.SET_TUTOR_DETAIL_ERROR;
  payload: IPayloadSetTutorDetailError;
} | {
  type: EAction.SET_FEEDBACK_RATED;
  payload: [string, boolean];
} | {
  type: EAction.SET_FEEDBACK_COMMENTED;
  payload: string;
};

export type TModelDispatch = Dispatch<TModelAction>;