import React from 'react';

import Provider from '../model';
import {
  IPropsTopNav
} from '../types';

import Ui from './ui';

export default function WithProvider(props: IPropsTopNav): JSX.Element {
  return <Provider props={props}>
    <Ui />
  </Provider>;
}
