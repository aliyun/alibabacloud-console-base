import React from 'react';
import styled from 'styled-components';

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

const ScButtonCreateOrder = styled(Button)`
  padding: 2px;
  line-height: initial;
`;

export default function ButtonCreateOrder(): JSX.Element {
  const {
    data: {
      loadingOfCreate
    }
  } = useOpDialog();
  const handleCreateOrder = useHandleCreateOrder();
  
  return <ScButtonCreateOrder {...{
    label: intl('change_order:op:create'),
    theme: ButtonTheme.TEXT_PRIMARY,
    loading: loadingOfCreate === LoadingStatus.LOADING,
    onClick: handleCreateOrder
  }} />;
}
