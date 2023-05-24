import React from 'react';

import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import intl from '../../../../../intl';
import {
  useHandleRetryPolling
} from '../../../hook';

export default function RetryPolling(): JSX.Element {
  const handleRetryPolling = useHandleRetryPolling();
  
  return <div>
    <Button {...{
      label: intl('change_order:op:restart_polling'),
      theme: ButtonTheme.TEXT_PRIMARY,
      onClick: handleRetryPolling
    }} />
  </div>;
}
