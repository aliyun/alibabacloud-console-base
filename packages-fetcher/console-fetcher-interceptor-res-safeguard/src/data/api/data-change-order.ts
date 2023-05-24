import fetcher from '@alicloud/console-fetcher-basic';

import {
  IData0ChangeOrder,
  IDataChangeOrder,
  IParamsChangeOrder
} from '../types';
import {
  URL_SAFEGUARD_ORDER_GET
} from '../const';
import {
  fixDataChangeOrder
} from '../util';

export default function dataChangeOrder(params: IParamsChangeOrder, url?: string): Promise<IDataChangeOrder> {
  return fetcher.get<IData0ChangeOrder, IParamsChangeOrder>(url || URL_SAFEGUARD_ORDER_GET, params).then(fixDataChangeOrder);
}
