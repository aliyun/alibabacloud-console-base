import React from 'react';
import {
  createPortal
} from 'react-dom';

import {
  IPropsModal
} from '../types';
import Provider from '../model';

import Ui from './ui';

export default function WithProvider(props: IPropsModal): JSX.Element {
  return createPortal(<Provider props={props}>
    <Ui />
  </Provider>, document.body);
}
