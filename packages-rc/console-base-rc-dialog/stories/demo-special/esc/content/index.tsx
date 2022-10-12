import React, {
  useState,
  useCallback
} from 'react';

import {
  P,
  Button
} from '@alicloud/demo-rc-elements';

import FusionOverlayMock from './fusion-overlay-mock';

export default function Content(): JSX.Element {
  const [stateFusionOverlayOpen, setStateFusionOverlayOpen] = useState<boolean>(false);
  
  const handleToggleFusionMock = useCallback(() => {
    setStateFusionOverlayOpen(!stateFusionOverlayOpen);
  }, [stateFusionOverlayOpen, setStateFusionOverlayOpen]);
  
  return <>
    {stateFusionOverlayOpen ? <FusionOverlayMock /> : null}
    <Button onClick={handleToggleFusionMock}>Toggle Fusion Overlay Mock</Button>
    {stateFusionOverlayOpen ? <P>此时 ESC 不可关闭</P> : <P>此时 ESC 可以关闭</P>}
  </>;
}
