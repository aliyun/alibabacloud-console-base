import React, {
  isValidElement
} from 'react';

import Icon, {
  IconType
} from '@alicloud/console-base-rc-icon';

export default function renderIcon(icon?: ' ' | IconType | JSX.Element, rotate?: number): JSX.Element | string | null {
  if (!icon) {
    return null;
  }
  
  if (icon === ' ') {
    return ' ';
  }
  
  if (isValidElement(icon)) {
    return icon;
  }
  
  return <Icon type={icon as IconType} rotate={rotate} />;
}