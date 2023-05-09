import React from 'react';

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
    icon: 'x',
    title: intl('op:close'),
    onClick: onClose
  }} />;
}
