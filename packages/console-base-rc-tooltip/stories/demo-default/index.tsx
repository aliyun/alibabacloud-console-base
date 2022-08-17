import React, {
  CSSProperties,
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  P
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';

import Tooltip, {
  TooltipPlacement
} from '../../src';
import PkgInfo from '../pkg-info';
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
  const [stateVisible, setStateVisible] = useState<boolean>();
  const [stateTooltipProps, setStateTooltipProps] = useState<KnobProps>({
    content: ''
  });
  const handleTriggerMouseEnter = useCallback(() => {
    setStateVisible(true);
  }, [setStateVisible]);
  const handleTriggerMouseLeave = useCallback(() => {
    setStateVisible(false);
  }, [setStateVisible]);
  const handleClose = useCallback(() => {
    setStateVisible(false);
  }, [setStateVisible]);
  
  const {
    config,
    ...tooltipProps
  } = stateTooltipProps;
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <P>目前没有配合 trigger 的功能，只能使用者定位</P>
    <Knobs onChange={setStateTooltipProps} />
    <ScFakeTriggerWrapper {...{
      onMouseEnter: handleTriggerMouseEnter,
      onMouseLeave: handleTriggerMouseLeave
    }}>
      <Tooltip {...{
        ...tooltipProps,
        visible: stateVisible,
        defaultVisible: true,
        style: STYLE[tooltipProps.placement || TooltipPlacement.TOP],
        onConfig: config ? onConfig : undefined,
        onClose: handleClose
      }} />
    </ScFakeTriggerWrapper>
  </>;
}
