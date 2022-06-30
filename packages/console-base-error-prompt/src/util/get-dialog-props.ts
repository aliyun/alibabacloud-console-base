import {
  Z_INDEX
} from '@alicloud/console-base-theme';
import {
  DialogSize,
  DialogProps
} from '@alicloud/console-base-rc-dialog';

import {
  IErrorDialogData,
  IErrorQueueItem
} from '../types';
import intl from '../intl';

export default function getDialogProps(queue: IErrorQueueItem[], content: JSX.Element): DialogProps<void, IErrorDialogData> {
  return {
    className: 'J-console-base-error-prompt', // 对外的样式钩子（J），供复写纵向位置（ESC 的需求）
    data: {
      page: 1
    },
    content,
    buttons: (data: IErrorDialogData) => {
      const {
        button
      } = queue[data.page - 1];
      const buttons = [];
      
      if (button) {
        buttons.push(button);
      }
      
      buttons.push(intl('op:close'));
      
      return buttons;
    },
    size: DialogSize.S,
    zIndex: Z_INDEX.ERROR_PROMPT,
    zIndexBackdrop: Z_INDEX.BACKDROP_ERROR_PROMPT,
    undefinedAsReject: false
  };
}