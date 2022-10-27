import React, {
  useEffect
} from 'react';

import {
  DATA_KEY_REGION_PORTAL,
  regionPortal
} from '@alicloud/console-base-messenger-region';

export default function MessengerRegionPortal(): JSX.Element {
  useEffect(() => {
    regionPortal();
    
    return regionPortal;
  }, []);
  
  return <div {...{
    [DATA_KEY_REGION_PORTAL]: ''
  }} />;
}