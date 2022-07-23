import React from 'react';

import Model, {
  ModelProps
} from '../model';

import Ui from './ui';

export default function WithProvider(props: ModelProps): JSX.Element {
  return <Model props={props}>
    <Ui />
  </Model>;
}
