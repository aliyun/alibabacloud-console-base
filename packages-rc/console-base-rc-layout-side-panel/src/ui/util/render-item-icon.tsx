import React, {
  isValidElement
} from 'react';

import {
  SidePanelItemProps
} from '../../model';

function isSvg(str: string): boolean {
  return /^\s*<svg/.test(str) && /<\/svg>\s*$/.test(str);
}

function isUrl(str: string): boolean {
  return /^(?:https?:)?\/\//.test(str);
}

export default function renderItemIcon(icon: SidePanelItemProps['icon']): JSX.Element | string | null {
  if (!icon) {
    return null;
  }
  
  if (isValidElement(icon)) {
    return icon;
  }
  
  if (typeof icon === 'string') {
    if (isSvg(icon)) {
      // eslint-disable-next-line react/no-danger
      return <span dangerouslySetInnerHTML={{
        __html: icon
      }} />;
    }
  
    if (isUrl(icon)) {
      return <img src={icon} alt="" />;
    }
  
    return icon;
  }
  
  if (icon.className) {
    return <i className={icon.className} />;
  }
  
  return null;
}
