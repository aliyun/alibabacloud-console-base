import {
  useEffect
} from 'react';

import {
  MessengerPayloadResourceGroup,
  onResourceGroupChange
} from '@alicloud/console-base-messenger-resource-group';

import {
  IPropsMessengerResourceGroupEvents
} from '../../types';

interface IProps extends Required<IPropsMessengerResourceGroupEvents> {}

/**
 * 仅响应事件，不控制组件
 */
export default function MessengerResourceGroupEvents({
  onChange
}: IProps): null {
  useEffect(() => onResourceGroupChange((payload: MessengerPayloadResourceGroup | null) => {
    if (payload) {
      onChange(payload.id, payload.name, payload.defaultOne, payload.payload);
    } else { // 切换到「全部资源组」
      onChange('', '');
    }
  }), [onChange]);
  
  return null;
}