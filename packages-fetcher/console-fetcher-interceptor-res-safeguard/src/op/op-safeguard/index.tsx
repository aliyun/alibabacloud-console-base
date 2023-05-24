import React from 'react';

import {
  FetcherError
} from '@alicloud/fetcher';
import {
  open
} from '@alicloud/console-base-rc-dialog';

import {
  IFetcherInterceptorConfig
} from '../../types';
import intl from '../../intl';
import {
  ChangeOrderStatus
} from '../../data';

import {
  IDialogResult,
  IDialogData
} from './types';
import DialogContent from './dialog-content';
import {
  createDialogData
} from './util';

export default function opSafeguard(error: FetcherError, interceptorConfig?: IFetcherInterceptorConfig): Promise<IDialogResult> {
  return open<IDialogResult, IDialogData>({
    title: intl('safeguard:title'),
    content: <DialogContent />,
    data: createDialogData(error, interceptorConfig),
    undefinedAsReject: true,
    buttons: data => [{
      label: intl('safeguard:op:submit'),
      disabled: data.changeOrder?.status !== ChangeOrderStatus.APPROVED,
      result: data.changeOrder ? {
        _orderId_: data.changeOrder.orderId,
        _orderType_: data.changeOrder.type,
        _orderCustomCode_: '' // TODO
      } : undefined
    }, intl('safeguard:op:cancel')]
  });
}
