import React, {
  ReactPortal
} from 'react';
import {
  createPortal
} from 'react-dom';

import {
  IDialogProps
} from '../types';
import {
  Provider
} from '../model';

import Ui from './ui';
import Lifecycle from './lifecycle';

/**
 * 带 context 的 dialog
 */
export default function WithProvider(props: IDialogProps<any, any>): ReactPortal { // eslint-disable-line @typescript-eslint/no-explicit-any
  return createPortal(<Provider props={props}>
    <Ui />
    <Lifecycle />
  </Provider>, document.body);
}
