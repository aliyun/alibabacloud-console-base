import React, {
  useState,
  useCallback
} from 'react';

import useMouseEnterLeave from '@alicloud/react-hook-mouse-enter-leave';
import Icon from '@alicloud/console-base-rc-icon';

import {
  useHandleGoTop
} from '../../../../model';
import intl from '../../../intl';
import {
  SidePanelItemWrap,
  SidePanelItemButton,
  SidePanelItemTooltip
} from '../../../rc';

export default function QuickTop(): JSX.Element {
  const handleGoTop = useHandleGoTop();
  const [stateHovered, setStateHovered] = useState(false);
  const [handleMouseEnter, handleMouseLeave] = useMouseEnterLeave(useCallback(() => {
    setStateHovered(true);
  }, [setStateHovered]), useCallback(() => {
    setStateHovered(false);
  }, [setStateHovered]));
  
  const title = intl('op:back_to_top');
  
  return <SidePanelItemWrap {...{
    hovered: stateHovered,
    onMouseLeave: handleMouseLeave
  }}>
    <SidePanelItemButton {...{
      title,
      label: <Icon type="go-top" />,
      onMouseEnter: handleMouseEnter,
      onClick: handleGoTop
    }} />
    <SidePanelItemTooltip {...{
      visible: stateHovered,
      content: title
    }} />
  </SidePanelItemWrap>;
}
