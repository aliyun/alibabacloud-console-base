import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  SIZE
} from '@alicloud/console-base-theme';
import Tooltip, {
  TooltipProps,
  TooltipPlacement
} from '@alicloud/console-base-rc-tooltip';

import {
  SidePanelItemProps
} from '../../../model';

interface IProps extends Omit<TooltipProps, 'placement' | 'arrowOffset'> {
  align?: SidePanelItemProps['tooltipAlign'];
}

const ScTooltip = styled(Tooltip)`
  right: ${SIZE.WIDTH_SIDE_PANEL - 4}px;
  
  ${props => {
    switch (props.placement) {
      case TooltipPlacement.LEFT_TOP:
        return css`
          top: 0;
        `;
      case TooltipPlacement.LEFT_BOTTOM:
        return css`
          bottom: 0;
        `;
      default:
        return css`
          bottom: ${SIZE.WIDTH_SIDE_PANEL * 0.5}px;
          transform: translateY(50%);
        `;
    }
  }}
  
  img {
    max-width: 100%;
  }
`;

function getPlacement(align?: SidePanelItemProps['tooltipAlign']): TooltipPlacement.LEFT | TooltipPlacement.LEFT_BOTTOM | TooltipPlacement.LEFT_TOP {
  switch (align) {
    case 'top':
      return TooltipPlacement.LEFT_TOP;
    case 'bottom':
      return TooltipPlacement.LEFT_BOTTOM;
    default:
      return TooltipPlacement.LEFT;
  }
}

/**
 * 工具按钮之外的部分（如果不是 tooltip 则期望它是 createPortal 出去的）
 */
export default function SidePanelItemTooltip({
  visible,
  align,
  content,
  ...props
}: IProps): JSX.Element {
  return <ScTooltip {...{
    visible,
    placement: getPlacement(align),
    arrowOffset: SIZE.WIDTH_SIDE_PANEL * 0.5,
    content,
    ...props
  }} />;
}