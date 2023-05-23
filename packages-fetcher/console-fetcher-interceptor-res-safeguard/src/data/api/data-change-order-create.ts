import fetcher from '@alicloud/console-fetcher-basic';

import {
  IData0ChangeOrder,
  IDataChangeOrder,
  IParamsChangeOrderCreate
} from '../types';
import {
  URL_SAFEGUARD_ORDER_CREATE
} from '../const';
import {
  fixDataChangeOrder
} from '../util';

export default function createChangeOrder(params: IParamsChangeOrderCreate, url?: string): Promise<IDataChangeOrder> {
  return fetcher.post<IData0ChangeOrder, IParamsChangeOrderCreate>(url || URL_SAFEGUARD_ORDER_CREATE, params).then(fixDataChangeOrder);
}
