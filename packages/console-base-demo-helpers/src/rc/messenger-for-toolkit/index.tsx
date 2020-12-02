import React, {
  useCallback,
  useEffect
} from 'react';

import {
  H2,
  Button
} from '@alicloud/demo-rc-elements';
import {
  forApp
} from '@alicloud/console-base-messenger';

export default function MessengerForToolkit(): JSX.Element {
  const handlePutTool = useCallback(() => {
    forApp.putToolkitItem({
      id: 'boshit',
      label: {
        html: '<span>💩</span>'
      },
      unread: 12
    });
  }, []);
  const handleRemoveTool = useCallback(() => {
    forApp.removeToolkitItem('boshit');
  }, []);
  
  useEffect(() => {
    forApp.putToolkitItem({
      id: 'before-ready',
      label: {
        html: '<span>🐞</span>'
      },
      tooltip: '测试 beforeReady'
    });
  }, []);
  
  return <>
    <H2>Toolkit</H2>
    <Button onClick={handlePutTool}>Put Tool Item</Button>
    <Button onClick={handleRemoveTool}>Remove Tool Item</Button>
  </>;
}
