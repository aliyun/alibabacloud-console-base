import React from 'react';

import {
  openIndirect
} from '@alicloud/console-base-rc-dialog';

import {
  IErrorDialogData,
  TErrorPromptArg,
  TErrorPromptArgExtra
} from '../types';
import {
  convertToQueueItem,
  getSoloQueue,
  getSoloDialogIndirect,
  setSoloDialogIndirect,
  pushSoloQueue,
  resolveSolo,
  getDialogProps
} from '../util';
import DialogContent from '../rc/dialog-content';

const queue = getSoloQueue(); // 永远指向一个对象

/**
 * 错误弹窗
 * 
 * `error` 可以是：
 *    1. 字符串、JSX 会被当作 message
 *    2. Error 实例，里边可以有 details 对象包含要展示的信息
 *    3. plain object
 * `extra` 用于自定义
 */
export default async function errorPrompt(error?: TErrorPromptArg, extra?: TErrorPromptArgExtra): Promise<void> {
  const queueItem = convertToQueueItem(error, extra);
  
  if (!queueItem) {
    return;
  }
  
  const errorPromise = new Promise<void>(resolve => {
    queueItem.resolve = resolve;
  });
  
  pushSoloQueue(queueItem);
  
  const dialogContent = <DialogContent {...{
    queue
  }} />;
  let dialogIndirect = getSoloDialogIndirect();
  
  if (dialogIndirect) { // dialog 已经打开
    dialogIndirect.renderUpdate({
      content: dialogContent
    });
    
    return errorPromise;
  }
  
  dialogIndirect = openIndirect<void, IErrorDialogData>(getDialogProps(queue, dialogContent));
  
  setSoloDialogIndirect(dialogIndirect);
  
  dialogIndirect.promise.then(resolveSolo);
  
  return errorPromise;
}
