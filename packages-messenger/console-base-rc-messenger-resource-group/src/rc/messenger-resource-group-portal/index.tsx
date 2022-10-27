import React, {
  useEffect
} from 'react';

import {
  DATA_KEY_RESOURCE_GROUP_PORTAL,
  resourceGroupPortal
} from '@alicloud/console-base-messenger-resource-group';

export default function MessengerResourceGroupPortal(): JSX.Element {
  useEffect(() => {
    resourceGroupPortal();
    
    return resourceGroupPortal;
  }, []);
  
  return <div {...{
    [DATA_KEY_RESOURCE_GROUP_PORTAL]: ''
  }} />;
}