import React from 'react';

import {
  IErrorQueueItem
} from '../../types';
import MessageMightBeDangerous from '../message-might-be-dangerous';

interface IProps {
  queueItem: IErrorQueueItem;
}

export default function ErrorMessage({
  queueItem: {
    message,
    error
  }
}: IProps): JSX.Element {
  return <MessageMightBeDangerous message={message || error.code || 'n / a'} />;
}
