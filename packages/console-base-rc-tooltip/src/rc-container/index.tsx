import React from 'react';

import Model, {
  ModelProps
} from '../model';

import Ui from './ui';
import Lifecycle from './lifecycle';

// TODO 还用不了
export default function WithProvider(props: ModelProps): JSX.Element {
  return <Model props={props}>
    <Ui />
    <Lifecycle />
  </Model>;
}
