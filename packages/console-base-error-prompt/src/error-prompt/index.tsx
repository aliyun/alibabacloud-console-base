import React from 'react';

import {
  EDialogSize,
  openIndirect
} from '@alicloud/console-base-rc-dialog';

import {
  IErrorDialogData,
  TErrorPromptArg,
  TErrorPromptArgExtra
} from '../types';
import intl from '../intl';
import convertToQueueItem from '../util/convert-to-queue-item';
import {
  getSoloQueue,
  getSoloDialogIndirect,
  setSoloDialogIndirect,
  pushSoloQueue,
  resolveSolo
} from '../util/the-solo';

import DialogContent from './dialog-content';

const queue = getSoloQueue(); // 永远指向一个对象

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
  
  dialogIndirect = openIndirect<void, IErrorDialogData>({
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
  
  setSoloDialogIndirect(dialogIndirect);
  
  dialogIndirect.promise.then(resolveSolo);
  
  return errorPromise;
}
