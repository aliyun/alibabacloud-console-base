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

/**
 * 带 context 的 dialog
 */
export default function DialogWithProvider(props: IDialogProps<any, any>): ReactPortal {
  return createPortal(<Provider props={props}>
    <Ui />
  </Provider>, document.body);
}
