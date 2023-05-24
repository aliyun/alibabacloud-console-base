import React from 'react';

import {
  LoadingStatus
} from '@alicloud/console-base-helper-loading';
import Alert, {
  AlertTheme
} from '@alicloud/console-base-rc-alert';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import Form from '@alicloud/console-base-rc-form';

import intl from '../../../intl';
import {
  useOpDialog,
  useEffects,
  useIntlBlockReason,
  useIntlBlockReasonMessage
} from '../hook';

import AlertTop from './alert-top';
import ButtonCreateOrder from './button-create-order';

export default function DialogContent(): JSX.Element {
  const {
    data: {
      changeOrder,
      loadingOfCreate
    }
  } = useOpDialog();
  const intlBlockReason = useIntlBlockReason();
  const intlBlockReasonMessage = useIntlBlockReasonMessage();
  
  useEffects();
  
  return <Form {...{
    dense: true,
    items: [{
      content: <AlertTop />
    }, {
      label: intl('safeguard:block_reason'),
      content: intlBlockReason,
      help: intlBlockReasonMessage
    }, ...changeOrder ? [{
      label: intl('change_order:attr:_'),
      content: <Button {...{
        theme: ButtonTheme.TEXT_PRIMARY,
        label: changeOrder.orderId,
        href: changeOrder.url,
        target: '_blank'
      }} />
    }, {
      label: intl('change_order:attr:time_modified'),
      content: intl.intlDate(changeOrder.timeModified)
    }, {
      label: intl('change_order:attr:time_created'),
      content: intl.intlDate(changeOrder.timeCreated)
    }] : [{
      label: intl('change_order:attr:_'),
      content: <ButtonCreateOrder />,
      help: loadingOfCreate === LoadingStatus.ERROR ? <Alert {...{
        dense: true,
        theme: AlertTheme.ERROR,
        message: intl('safeguard:message:change_order_create_error')
      }} /> : ''
    }]]
  }} />;
}
