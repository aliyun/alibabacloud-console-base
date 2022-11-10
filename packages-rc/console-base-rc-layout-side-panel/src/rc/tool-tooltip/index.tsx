import React from 'react';
import styled from 'styled-components';

import {
  SIZE
} from '@alicloud/console-base-theme';
import Tooltip, {
  TooltipPlacement
} from '@alicloud/console-base-rc-tooltip';

interface IProps {
  visible: boolean;
  content: JSX.Element | string;
}

const ScTooltip = styled(Tooltip)`
  right: ${SIZE.WIDTH_SIDE_PANEL - 4}px;
  bottom: ${SIZE.WIDTH_SIDE_PANEL * 0.5}px;
  transform: translateY(50%);
  
  img {
    max-width: 100%;
  }
`;

/**
 * 工具按钮之外的部分（如果不是 tooltip 则期望它是 createPortal 出去的）
 */
export default function ToolTooltip({
  visible,
  content
}: IProps): JSX.Element {
  return <ScTooltip {...{
    visible,
    placement: TooltipPlacement.LEFT,
    content
  }} />;
}