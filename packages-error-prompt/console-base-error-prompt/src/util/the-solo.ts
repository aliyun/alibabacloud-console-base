import _isEqual from 'lodash/isEqual';

import {
  IErrorQueueItem,
  TDialogIndirect
} from '../types';
import {
  DETAILED_MODE,
  MERGED_ERROR_CODES
} from '../const';

// dialog openIndirect 需要用它来保存未完成的队列
const queue0: IErrorQueueItem[] = [];
const queue: IErrorQueueItem[] = [];
let dialogIndirect: TDialogIndirect | null = null;

function considerEqual(o1: IErrorQueueItem, o2: IErrorQueueItem): boolean {
  if (_isEqual(o1.error, o2.error)) { // 相同的错误
    return true;
  }
  
  // 非详细模式下，可以合并一些 code 已存在的错误
  return !!(!DETAILED_MODE && o1.error.code && o1.error.code === o2.error.code && MERGED_ERROR_CODES.includes(o1.error.code));
}

export function getSoloQueue(): IErrorQueueItem[] { // 始终指向一个对象
  return queue;
}

export function getSoloDialogIndirect(): TDialogIndirect | null {
  return dialogIndirect;
}

export function setSoloDialogIndirect(o: TDialogIndirect): void {
  dialogIndirect = o;
}

export function pushSoloQueue(queueItem: IErrorQueueItem): void {
  queue0.push(queueItem);
  
  if (!queue.find(v => considerEqual(v, queueItem))) {
    queue.push(queueItem);
  }
}

export function resolveSolo(): void {
  queue0.forEach(v => v.resolve());

  dialogIndirect = null;
  queue0.length = 0;
  queue.length = 0;
}