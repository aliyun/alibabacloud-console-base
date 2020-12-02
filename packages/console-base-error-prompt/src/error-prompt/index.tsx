import React from 'react';

import {
  AltWrap,
  openIndirect
} from '@alicloud/console-base-rc-dialog';

import {
  IErrorQueueItem,
  IErrorPromptSolo,
  IErrorDialogData,
  TErrorPromptArg,
  IErrorPromptArgExtra
} from '../types';
import intl from '../intl';
import convertToErrorQueueItem from '../util/convert-to-error-queue-item';

import DialogContent from './dialog-content';

const SOLO: IErrorPromptSolo = {
  dialogIndirect: null,
  queue: []
};

const defaultTitle = intl('alert_error:title');
const defaultButton = intl('alert_error:op:ok');

/**
 * 错误弹窗
 * 
 * `o` 可以是：
 *    1. 字符串、JSX 会被当作 message
 *    2. Error 实例，里边可以有 details 对象包含要展示的信息
 *    3. plain object
 * `extra` 用于自定义 title、button
 */
export default async function errorPrompt(o?: TErrorPromptArg, extra?: IErrorPromptArgExtra): Promise<void> {
  const queueItem: IErrorQueueItem = convertToErrorQueueItem(o, extra);
  
  if (!queueItem?.error) {
    return;
  }
  
  const {
    queue
  } = SOLO;
  
  const errorPromise = new Promise<void>(resolve => {
    queueItem.resolve = resolve;
  });
  
  queue.push(queueItem);
  
  const dialogContent = <AltWrap {...{
    content: <DialogContent {...{
      queue
    }} />
  }} />;
  
  if (SOLO.dialogIndirect) { // dialog 已经打开
    SOLO.dialogIndirect.renderUpdate({
      content: dialogContent
    });
    
    return errorPromise;
  }
  
  const dialogIndirect = openIndirect<void, IErrorDialogData>({
    content: dialogContent,
    title(data: IErrorDialogData) {
      return queue[data.page - 1].title || defaultTitle;
    },
    buttons(data: IErrorDialogData) {
      return [queue[data.page - 1].button || defaultButton];
    },
    undefinedAsReject: false,
    data: {
      page: 1
    }
  });
  
  SOLO.dialogIndirect = dialogIndirect;
  
  dialogIndirect.promise.then(() => {
    queue.forEach(v => v.resolve());
    
    SOLO.dialogIndirect = null;
    SOLO.queue = [];
  });
  
  return errorPromise;
}
