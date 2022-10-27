import {
  useEffect
} from 'react';

import {
  onRegionChange
} from '@alicloud/console-base-messenger-region';

import {
  IPropsMessengerRegionEvents
} from '../../types';

interface IProps extends Required<IPropsMessengerRegionEvents> {}

/**
 * 仅响应事件，不控制组件
 */
export default function MessengerRegionEvents({
  onChange
}: IProps): null {
  useEffect(() => onRegionChange(({
    id,
    name,
    correctedFrom
  }) => onChange(id, name, correctedFrom)), [onChange]);
  
  return null;
}