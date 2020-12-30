import React from 'react';

import Icon from '@alicloud/console-base-rc-icon';

import intl from '../../../intl';
import ControlButton from '../../../rc/control-button';
import {
  useDispatchClose
} from '../../../model';

export default function ButtonX(): JSX.Element {
  const dispatchClose = useDispatchClose();
  
  return <ControlButton {...{
    spm: 'close',
    label: <Icon type="x" />,
    title: intl('op:close'),
    onClick: dispatchClose
  }} />;
}
