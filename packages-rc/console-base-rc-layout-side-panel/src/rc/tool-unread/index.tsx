import React from 'react';
import styled from 'styled-components';

import {
  BadgeBaseDot,
  BadgeBaseNumber
} from '@alicloud/console-base-theme-sc-base';

interface IProps {
  unread?: boolean | number;
}

const ScUnreadBadgeDot = styled(BadgeBaseDot)`
  top: 8px;
  right: 8px;
`;
const ScUnreadBadgeNumber = styled(BadgeBaseNumber)`
  top: 4px;
  right: 4px;
`;

export default function ToolUnread({
  unread
}: IProps): JSX.Element | null {
  if (!unread) {
    return null;
  }
  
  if (unread === true) {
    return <ScUnreadBadgeDot />;
  }
  
  return unread > 0 ? <ScUnreadBadgeNumber>{unread}</ScUnreadBadgeNumber> : null;
}