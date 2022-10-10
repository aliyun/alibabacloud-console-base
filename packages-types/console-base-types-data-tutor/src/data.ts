import {
  ITutorStep
} from './common';

export interface IDataTutorDetail {
  productId: string;
  tutorId: string;
  name: string;
  brief: string;
  steps: ITutorStep[];
  pre: boolean;
}