import React from 'react';

import Alert, {
  AlertTheme
} from '@alicloud/console-base-rc-alert';

import {
  ChangeOrderStatus
} from '../../../../data';
import intl from '../../../../intl';
import {
  useOpDialog
} from '../../hook';

import RetryPolling from './retry-polling';
import RefreshStatus from './refresh-status';

export default function AlertTop(): JSX.Element {
  const {
    data: {
      changeOrder,
      pollingLeft
    }
  } = useOpDialog();
  
  if (!changeOrder) {
    return <Alert {...{
      theme: AlertTheme.WARNING,
      message: intl('safeguard:message:change_blocked!html')
    }} />;
  }
  
  switch (changeOrder.status) {
    case ChangeOrderStatus.INITIALIZING:
      return <Alert {...{
        theme: pollingLeft <= 0 ? AlertTheme.WARNING : AlertTheme.LOADING,
        message: <>
          {intl('safeguard:message:change_order_status_initializing_polling_left_{times}!html', {
            times: pollingLeft
          })}
          {pollingLeft <= 0 ? <RetryPolling /> : null}
        </>
      }} />;
    case ChangeOrderStatus.APPROVAL_WAITING:
      return <Alert {...{
        theme: AlertTheme.WARNING,
        message: <>
          {intl('safeguard:message:change_order_status_approval_waiting_{url}!html!lines', {
            url: changeOrder.url
          })}
          <RefreshStatus />
        </>
      }} />;
    case ChangeOrderStatus.APPROVED:
      return <Alert {...{
        theme: AlertTheme.SUCCESS,
        message: intl('safeguard:message:change_order_status_approved!html')
      }} />;
    case ChangeOrderStatus.CANCELLED:
      return <Alert {...{
        theme: AlertTheme.ERROR,
        message: intl('safeguard:message:change_order_status_cancelled!html')
      }} />;
    case ChangeOrderStatus.REJECTED:
      return <Alert {...{
        theme: AlertTheme.ERROR,
        message: intl('safeguard:message:change_order_status_rejected!html')
      }} />;
    case ChangeOrderStatus.EXEC_SUCCESS:
      return <Alert {...{
        theme: AlertTheme.ERROR,
        message: intl('safeguard:message:change_order_status_finished!html')
      }} />;
    default:
      return <Alert {...{
        theme: AlertTheme.ERROR,
        message: intl('safeguard:message:change_order_status_{abnormal}!html', {
          abnormal: changeOrder.status
        })
      }} />;
  }
}
