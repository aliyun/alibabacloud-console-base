import {
  get as _get
} from 'lodash-es';
import React from 'react';

import {
  LoadingStatus
} from '@alicloud/console-base-helper-loading';
import Alert, {
  AlertTheme
} from '@alicloud/console-base-rc-alert';
import Form from '@alicloud/console-base-rc-form';

import {
  BlockReason
} from '../../../data';
import intl, {
  intlBlockReason
} from '../../../intl';
import {
  useOpDialog
} from '../hook';

import ButtonCreateOrder from './button-create-order';

export default function DialogContent(): JSX.Element {
  const {
    data: {
      sourceError,
      changeOrder,
      loadingCreate
    }
  } = useOpDialog();
  
  return <Form {...{
    dense: true,
    items: [{
      content: <Alert {...{
        theme: AlertTheme.WARNING,
        message: intl('safeguard:message:change_blocked!html')
      }} />
    }, {
      label: '拦截原因',
      content: intlBlockReason(_get(sourceError, 'responseData.data.reason', BlockReason.NORMAL))
    }, ...changeOrder ? [{
      label: intl('safeguard:attr:change_order'),
      content: changeOrder.orderId
    }, {
      label: '张贴',
      content: changeOrder.status
    }, {
      label: '创建时间',
      content: intl.intlDate(changeOrder.timeCreated)
    }] : [{
      label: intl('safeguard:attr:change_order'),
      content: <ButtonCreateOrder />,
      help: loadingCreate === LoadingStatus.ERROR ? intl('safeguard:message:create_error') : ''
    }]]
  }} />;
}
