import {
  IData0ChangeOrder
} from './data0';

export interface IDataChangeOrder extends Omit<IData0ChangeOrder, 'timeCreated' | 'timeModified'> {
  timeCreated: Date;
  timeModified: Date;
}
