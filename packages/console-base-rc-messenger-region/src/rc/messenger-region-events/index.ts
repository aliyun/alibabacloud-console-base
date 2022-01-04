import {
  useEffect
} from 'react';

import {
  onRegionChange
} from '@alicloud/console-base-messenger';

import {
  IPropsMessengerRegionEvents
} from '../../types';

/**
 * 仅响应事件，不控制组件
 */
export default function MessengerRegionEvents({
  onChange
}: IPropsMessengerRegionEvents): null {
  useEffect(() => {
    if (onChange) {
      return onRegionChange(({
        id,
        name,
        correctedFrom
      }) => onChange(id, name, correctedFrom));
    }
  }, [onChange]);
  
  return null;
}