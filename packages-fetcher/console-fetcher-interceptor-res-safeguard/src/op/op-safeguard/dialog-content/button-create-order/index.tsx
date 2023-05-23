import React from 'react';

import {
  LoadingStatus
} from '@alicloud/console-base-helper-loading';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import intl from '../../../../intl';
import {
  useOpDialog,
  useHandleCreateOrder
} from '../../hook';

export default function ButtonCreateOrder(): JSX.Element {
  const {
    data: {
      loadingCreate
    }
  } = useOpDialog();
  const handleCreateOrder = useHandleCreateOrder();
  
  return <Button {...{
    label: intl('safeguard:op:create_order'),
    theme: ButtonTheme.TEXT_SECONDARY,
    loading: loadingCreate === LoadingStatus.LOADING,
    onClick: handleCreateOrder
  }} />;
}
