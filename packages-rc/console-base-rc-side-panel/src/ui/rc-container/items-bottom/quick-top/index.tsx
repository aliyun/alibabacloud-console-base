import React, {
  useState,
  useCallback
} from 'react';

import useMouseHover from '@alicloud/react-hook-mouse-hover';
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
  const [handleMouseEnter, handleMouseLeave] = useMouseHover({
    onEnter: useCallback(() => {
      setStateHovered(true);
    }, [setStateHovered]),
    onLeave: useCallback(() => {
      setStateHovered(false);
    }, [setStateHovered])
  });
  
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
