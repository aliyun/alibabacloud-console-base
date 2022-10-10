import {
  IDataTutorDetail
} from './data';

export interface IApiDataTutorDetail {
  (productId: string, tutorId: string, pre?: boolean): Promise<IDataTutorDetail>;
}