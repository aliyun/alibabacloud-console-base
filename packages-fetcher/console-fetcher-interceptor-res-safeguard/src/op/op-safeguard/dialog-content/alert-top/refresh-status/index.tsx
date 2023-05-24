import React from 'react';

import {
  LoadingStatus
} from '@alicloud/console-base-helper-loading';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import intl from '../../../../../intl';
import {
  useOpDialog,
  useHandleRefreshChangeOrder
} from '../../../hook';

export default function RefreshStatus(): JSX.Element {
  const {
    data: {
      loadingOfGet
    }
  } = useOpDialog();
  const handleRefreshChangeOrder = useHandleRefreshChangeOrder();
  
  return <div>
    <Button {...{
      label: intl('change_order:op:refresh_status'),
      theme: ButtonTheme.TEXT_PRIMARY,
      loading: loadingOfGet === LoadingStatus.LOADING,
      onClick: handleRefreshChangeOrder
    }} />
  </div>;
}
