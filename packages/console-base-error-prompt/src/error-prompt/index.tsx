import React from 'react';

import {
  EDialogSize,
  openIndirect
} from '@alicloud/console-base-rc-dialog';

import {
  IErrorPromptSolo,
  IErrorDialogData,
  TErrorPromptArg,
  TErrorPromptArgExtra
} from '../types';
import convertToQueueItem from '../util/convert-to-queue-item';
import intl from '../intl';

import DialogContent from './dialog-content';

const SOLO: IErrorPromptSolo = {
  dialogIndirect: null,
  queue: []
};

/**
 * 错误弹窗
 * 
 * `o` 可以是：
 *    1. 字符串、JSX 会被当作 message
 *    2. Error 实例，里边可以有 details 对象包含要展示的信息
 *    3. plain object
 * `extra` 用于自定义
 */
export default async function errorPrompt(o?: TErrorPromptArg, extra?: TErrorPromptArgExtra): Promise<void> {
  const queueItem = convertToQueueItem(o, extra);
  
  if (!queueItem) {
    return;
  }
  
  const {
    queue
  } = SOLO;
  
  const errorPromise = new Promise<void>(resolve => {
    queueItem.resolve = resolve;
  });
  
  queue.push(queueItem);
  
  const dialogContent = <DialogContent {...{
    queue
  }} />;
  
  if (SOLO.dialogIndirect) { // dialog 已经打开
    SOLO.dialogIndirect.renderUpdate({
      content: dialogContent
    });
    
    return errorPromise;
  }
  
  const dialogIndirect = openIndirect<void, IErrorDialogData>({
    data: {
      page: 1
    },
    content: dialogContent,
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
    size: EDialogSize.S,
    undefinedAsReject: false
  });
  
  SOLO.dialogIndirect = dialogIndirect;
  
  dialogIndirect.promise.then(() => {
    queue.forEach(v => v.resolve());
    
    SOLO.dialogIndirect = null;
    SOLO.queue = [];
  });
  
  return errorPromise;
}
