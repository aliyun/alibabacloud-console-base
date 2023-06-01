import React, {
  isValidElement
} from 'react';

import {
  TEasyIconValue
} from '../types';

import isUrl from './is-url';
import isSvg from './is-svg';

export default function renderEasyIcon(icon: TEasyIconValue): JSX.Element | null {
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

    return <>{icon}</>;
  }

  if ('className' in icon) {
    return <i className={icon.className} />;
  }

  return null;
}
