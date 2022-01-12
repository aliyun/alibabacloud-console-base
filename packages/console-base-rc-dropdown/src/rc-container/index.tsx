import React from 'react';

import Provider, {
  ModelProps
} from '../model';

import Ui from './ui';
import Lifecycle from './lifecycle';

export default function WithProvider(props: ModelProps): JSX.Element {
  return <Provider props={props}>
    <Ui />
    <Lifecycle />
  </Provider>;
}
