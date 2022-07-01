import React from 'react';

import Model, {
  IModelProps
} from '../model';

import Ui from './ui';
import Lifecycle from './lifecycle';

export default function WithProvider(props: IModelProps): JSX.Element {
  return <Model props={props}>
    <Ui />
    <Lifecycle />
  </Model>;
}
