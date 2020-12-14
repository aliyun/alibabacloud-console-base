import React from 'react';

import Provider from '../model';
import {
  IPropsTabs
} from '../types';

import Ui from './ui';

export default function WithProvider(props: IPropsTabs): JSX.Element {
  return <Provider props={props}>
    <Ui />
  </Provider>;
}
