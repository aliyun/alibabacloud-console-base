import {
  subscribeByApp
} from '@alicloud/console-base-messenger-base';

import {
  MESSAGE_TYPE_TOGGLE_VISIBLE
} from '../const';

export default function onToggleVisible(fn: (payload: boolean) => void): () => void {
  return subscribeByApp<boolean>(MESSAGE_TYPE_TOGGLE_VISIBLE, payload => {
    fn(payload);
  });
}
