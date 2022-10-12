import {
  useEffect
} from 'react';

import {
  triggerRegionOuDetection
} from '@alicloud/console-base-messenger-region';

interface IProps {
  regionId: string;
  regionName: string;
  commodityCode?: string;
}

/**
 * 应用主动个触发地域 OU 探测
 */
export default function MessengerRegionOuDetection({
  regionId,
  regionName,
  commodityCode = ''
}: IProps): null {
  useEffect(() => triggerRegionOuDetection(regionId, regionName, commodityCode), [regionId, regionName, commodityCode]);
  
  return null;
}