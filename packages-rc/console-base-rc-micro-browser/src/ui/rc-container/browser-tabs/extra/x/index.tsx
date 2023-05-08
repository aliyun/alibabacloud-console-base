import React from 'react';

import Icon from '@alicloud/console-base-rc-icon';

import {
  useProps
} from '../../../../../model';
import intl from '../../../../intl';
import ExtraButton from '../extra-button';

export default function ButtonX(): JSX.Element {
  const {
    onClose
  } = useProps();
  
  return <ExtraButton {...{
    spm: 'close',
    label: <Icon type="x" />,
    title: intl('op:close'),
    onClick: onClose
  }} />;
}
