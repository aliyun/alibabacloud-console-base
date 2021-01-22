import React from 'react';

import Icon, {
  IconType
} from '@alicloud/console-base-rc-icon';

export default function renderIcon(icon?: IconType | JSX.Element): JSX.Element | null {
  if (!icon) {
    return null;
  }
  
  if (React.isValidElement(icon)) {
    return icon;
  }
  
  return <Icon type={icon as IconType} />;
}
