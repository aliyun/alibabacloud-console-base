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
  IDemoHelperRainbowTextWithTooltip
} from '../../types';

const ScWithTip = styled.div`
  position: relative;
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

/**
 * 由于特殊原因需要将一些元素渲染到顶栏中的 Tooltip 时，可以用这个
 */
export default function RainbowTextWithTooltip({
  label,
  tip,
  tipWidth,
  tipAlignRight,
  ...props
}: IDemoHelperRainbowTextWithTooltip): JSX.Element {
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
      className: 'theme-dark', // will trigger inside components dark mode
      placement: tipAlignRight ? TooltipPlacement.BOTTOM_RIGHT : TooltipPlacement.BOTTOM_LEFT,
      style: tipAlignRight ? {
        top: '100%',
        right: 0
      } : {
        top: '100%',
        left: 0
      }
    }} />
  </ScWithTip>;
}
