import React, {
  useMemo
} from 'react';

import Dialog from '@alicloud/console-base-rc-dialog';

import {
  IErrorQueueItem,
  TErrorPromptArg,
  TErrorPromptArgExtra
} from '../../types';
import {
  convertToQueueItem,
  getDialogProps
} from '../../util';
import DialogContent from '../dialog-content';

interface IItem {
  error: TErrorPromptArg;
  extra?: TErrorPromptArgExtra;
}

interface IProps {
  items?: IItem[];
  detailedMode?: boolean;
  onClose(): void; // 因为是组件式调用，必须设置 onClose
}

/**
 * 组件式调用（不推荐）
 */
export default function ErrorPrompt({
  items,
  detailedMode,
  onClose
}: IProps): JSX.Element | null {
  const queue: IErrorQueueItem[] = useMemo((): IErrorQueueItem[] => (items || []).reduce((result: IErrorQueueItem[], v) => {
    const queueItem = convertToQueueItem(v.error, v.extra, detailedMode);
    
    if (queueItem) {
      result.push(queueItem);
    }
    
    return result;
  }, []), [items, detailedMode]);
  
  if (!queue.length) {
    return null;
  }
  
  return <Dialog {...getDialogProps(queue, <DialogContent queue={queue} />)} onClose={onClose} />;
}