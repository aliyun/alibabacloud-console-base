import React from 'react';
import styled from 'styled-components';

import {
  BadgeBaseDot,
  BadgeBaseNumber
} from '@alicloud/console-base-theme-sc-base';
import {
  New,
  Hot
} from '@alicloud/console-base-rc-marks';

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
const ScNew = styled(New)`
  position: absolute;
  top: 4px;
  right: 0;
  transform: scale(0.8);
`;
const ScHot = styled(Hot)`
  position: absolute;
  top: 4px;
  right: 0;
  transform: scale(0.8);
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
  
  if (mark === 'new') {
    return <ScNew hollow />;
  }
  
  if (mark === 'hot') {
    return <ScHot hollow />;
  }
  
  return null;
}
