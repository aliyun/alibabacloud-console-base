import {
  useEffect
} from 'react';

import {
  setRegionOuCommodityCode
} from '@alicloud/console-base-messenger';

interface IProps {
  commodityCode: string;
}

/**
 * 用于自定义地域 OU 探测时的商品码参数
 */
export default function MessengerRegionOuCommodity({
  commodityCode
}: IProps): null {
  useEffect(() => setRegionOuCommodityCode(commodityCode), [commodityCode]);
  
  return null;
}