import React, {
  useState,
  useCallback
} from 'react';

import {
  InputSwitch
} from '@alicloud/demo-rc-elements';

import Tooltip from '../../src/rc/tooltip';
import Knobs, {
  KnobProps
} from '../knobs';

function onConfig(): void {
  // eslint-disable-next-line no-console
  console.info('fake onConfig');
}

export default function DemoRcOnly(): JSX.Element {
  const [stateVisible, setStateVisible] = useState<boolean>(true);
  const [stateTooltipProps, setStateTooltipProps] = useState<KnobProps>({
    content: ''
  });
  const handleClose = useCallback(() => {
    setStateVisible(false);
  }, [setStateVisible]);
  
  const {
    close,
    config,
    ...tooltipProps
  } = stateTooltipProps;
  
  return <>
    <Knobs onChange={setStateTooltipProps} />
    <InputSwitch {...{
      label: 'visible',
      value: stateVisible,
      onChange: setStateVisible
    }} />
    <Tooltip {...{
      ...tooltipProps,
      visible: stateVisible,
      style: {
        top: 120,
        left: 120
      },
      onConfig: config ? onConfig : undefined,
      onClose: close ? handleClose : undefined
    }} />
  </>;
}
