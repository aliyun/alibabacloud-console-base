import React from 'react';
import {
  createPortal
} from 'react-dom';

import Provider, {
  ModelProps
} from '../model';

import Ui from './ui';
import SmoothMoving from './smooth-moving';

export default function WithProvider(props: ModelProps): JSX.Element {
  return createPortal(<Provider props={props}>
    <Ui />
    <SmoothMoving />
  </Provider>, document.body);
}
