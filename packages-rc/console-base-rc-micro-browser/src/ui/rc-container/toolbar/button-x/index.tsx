import React from 'react';

import Icon from '@alicloud/console-base-rc-icon';

import {
  useProps
} from '../../../../model';
import intl from '../../../intl';
import {
  ControlButton
} from '../../../rc';

export default function ButtonX(): JSX.Element {
  const {
    onClose
  } = useProps();
  
  return <ControlButton {...{
    spm: 'close',
    label: <Icon type="x" />,
    title: intl('op:close'),
    onClick: onClose
  }} />;
}
