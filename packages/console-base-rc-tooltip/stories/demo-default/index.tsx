import React, {
  CSSProperties,
  useState
} from 'react';
import styled from 'styled-components';

import {
  P,
  InputSwitch
} from '@alicloud/demo-rc-elements';

import Tooltip, {
  TooltipPlacement
} from '../../src';
import Knobs, {
  KnobProps
} from '../knobs';

function onConfig(): void {
  // eslint-disable-next-line no-console
  console.info('fake onConfig');
}

const ScFakeTriggerWrapper = styled.div`
  position: absolute;
  top: 200px;
  left: 320px;
  background-color: #c0f;
  width: 200px;
  height: 40px;
`;

const STYLE: Record<TooltipPlacement, CSSProperties> = {
  [TooltipPlacement.TOP]: {
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  [TooltipPlacement.TOP_LEFT]: {
    bottom: '100%',
    left: 0
  },
  [TooltipPlacement.TOP_RIGHT]: {
    bottom: '100%',
    right: 0
  },
  [TooltipPlacement.BOTTOM]: {
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  [TooltipPlacement.BOTTOM_LEFT]: {
    top: '100%',
    left: 0
  },
  [TooltipPlacement.BOTTOM_RIGHT]: {
    top: '100%',
    right: 0
  },
  [TooltipPlacement.LEFT]: {
    right: '100%',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  [TooltipPlacement.LEFT_TOP]: {
    right: '100%',
    top: 0
  },
  [TooltipPlacement.LEFT_BOTTOM]: {
    right: '100%',
    bottom: 0
  },
  [TooltipPlacement.RIGHT]: {
    left: '100%',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  [TooltipPlacement.RIGHT_TOP]: {
    left: '100%',
    top: 0
  },
  [TooltipPlacement.RIGHT_BOTTOM]: {
    left: '100%',
    bottom: 0
  }
};

export default function DemoNoTrigger(): JSX.Element {
  const [stateVisible, setStateVisible] = useState<boolean>(true);
  const [stateTooltipProps, setStateTooltipProps] = useState<KnobProps>({
    content: ''
  });
  
  const {
    config,
    ...tooltipProps
  } = stateTooltipProps;
  
  return <>
    <P>目前没有配合 trigger 的功能，只能使用者定位</P>
    <Knobs onChange={setStateTooltipProps} />
    <InputSwitch {...{
      label: 'visible',
      value: stateVisible,
      onChange: setStateVisible
    }} />
    <ScFakeTriggerWrapper>
      <Tooltip {...{
        ...tooltipProps,
        visible: stateVisible,
        style: STYLE[tooltipProps.placement || TooltipPlacement.TOP],
        onConfig: config ? onConfig : undefined,
        onVisibleChange: setStateVisible
      }} />
    </ScFakeTriggerWrapper>
  </>;
}
