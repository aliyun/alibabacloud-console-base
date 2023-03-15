import React from 'react';
import styled from 'styled-components';

import {
  BadgeBaseDot,
  BadgeBaseNumber
} from '@alicloud/console-base-theme-sc-base';
import Mark from '@alicloud/console-base-rc-marks';

import {
  SidePanelItemProps
} from '../../../model';

interface IProps extends Pick<SidePanelItemProps, 'unread' | 'mark'> {}

const ScUnreadDot = styled(BadgeBaseDot)`
  top: 8px;
  right: 8px;
`;
const ScUnreadNumber = styled(BadgeBaseNumber)`
  top: 4px;
  right: 2px;
`;
const ScMark = styled(Mark)`
  position: absolute;
  top: 4px;
  right: 0;
  transform: scale(0.75);
`;

/**
 * 右上角的徽标，unread 优先于 mark
 */
export default function SidePanelItemBadge({
  unread,
  mark
}: IProps): JSX.Element | null {
  if (unread) {
    if (unread === true) {
      return <ScUnreadDot />;
    }
    
    return <ScUnreadNumber>{unread < 100 ? unread : '99+'}</ScUnreadNumber>;
  }
  
  if (mark === 'NEW' || mark === 'HOT') {
    return <ScMark type={mark} borderRadius />;
  }
  
  return null;
}
