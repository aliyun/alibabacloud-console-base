import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  RainbowText
} from '@alicloud/demo-rc-elements';
import {
  SIZE
} from '@alicloud/console-base-theme';
import Tooltip, {
  TooltipTheme,
  TooltipPlacement
} from '@alicloud/console-base-rc-tooltip';

import {
  IDemoHelperRightItemProps
} from '../../types';

const ScWithTip = styled.div`
  height: ${SIZE.HEIGHT_TOP_NAV}px;
  line-height: ${SIZE.HEIGHT_TOP_NAV}px;
`;

const ScRainbowText = styled(RainbowText)`
  cursor: default;
`;

const ScTooltip = styled(Tooltip)`
  top: 100%;
  right: 0;
`;

export default function TopNavRightItem({
  label,
  tip,
  tipWidth,
  ...props
}: IDemoHelperRightItemProps): JSX.Element {
  const [stateTooltipVisible, setStateTooltipVisible] = useState<boolean>(false);
  const handleMouseEnter = useCallback(() => setStateTooltipVisible(true), [setStateTooltipVisible]);
  const handleMouseLeave = useCallback(() => setStateTooltipVisible(false), [setStateTooltipVisible]);
  
  return <ScWithTip {...{
    ...props,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }}>
    {typeof label === 'string' ? <ScRainbowText>{label}</ScRainbowText> : label}
    <ScTooltip {...{
      content: tip,
      visible: stateTooltipVisible,
      width: tipWidth,
      theme: TooltipTheme.INVERSE,
      placement: TooltipPlacement.BOTTOM_RIGHT
    }} />
  </ScWithTip>;
}
