import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  BadgeBaseDot,
  BadgeBaseNumber
} from '@alicloud/console-base-theme-sc-base';
import Mark from '@alicloud/console-base-rc-marks';

import {
  SidePanelItemProps
} from '../../../model';

interface IProps extends Pick<SidePanelItemProps, 'unread' | 'mark'> {
  alignLeft?: boolean;
}

interface IScProps {
  $alignLeft?: boolean;
}

const ScUnreadDot = styled(BadgeBaseDot)<IScProps>`
  top: 8px;
  ${props => (props.$alignLeft ? css`
    left: 8px;
  ` : css`
    right: 8px;
  `)}
`;
const ScUnreadNumber = styled(BadgeBaseNumber)<IScProps>`
  top: 4px;
  ${props => (props.$alignLeft ? css`
    left: 2px;
    right: auto;
  ` : css`
    right: 2px;
  `)}
`;
const ScMark = styled(Mark)<IScProps>`
  position: absolute;
  top: 4px;
  ${props => (props.$alignLeft ? css`
    left: 0;
  ` : css`
    right: 0;
  `)}
  transform: scale(0.75);
`;

/**
 * 右上角的徽标，unread 优先于 mark
 */
export default function SidePanelItemBadge({
  unread,
  mark,
  alignLeft
}: IProps): JSX.Element | null {
  if (unread) {
    if (unread === true) {
      return <ScUnreadDot $alignLeft={alignLeft} />;
    }
    
    return <ScUnreadNumber $alignLeft={alignLeft}>{unread < 100 ? unread : '99+'}</ScUnreadNumber>;
  }
  
  if (mark === 'NEW' || mark === 'HOT') {
    return <ScMark $alignLeft={alignLeft} type={mark} borderRadius />;
  }
  
  return null;
}
