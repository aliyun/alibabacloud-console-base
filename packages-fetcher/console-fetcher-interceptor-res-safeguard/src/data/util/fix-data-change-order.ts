import {
  IData0ChangeOrder,
  IDataChangeOrder
} from '../types';

export default function fixDataChangeOrder(data0: IData0ChangeOrder): IDataChangeOrder {
  const {
    timeCreated,
    timeModified,
    ...rest
  } = data0;
  
  return {
    ...rest,
    timeCreated: new Date(timeCreated),
    timeModified: new Date(timeModified)
  };
}
