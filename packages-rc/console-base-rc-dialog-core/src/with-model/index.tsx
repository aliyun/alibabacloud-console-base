import React, {
  ReactPortal
} from 'react';
import {
  createPortal
} from 'react-dom';

import Model, {
  ModelProps
} from '../model';
import Ui from '../ui';

/**
 * 带 context 的 dialog
 */
export default function WithProvider(props: ModelProps<any, any>): ReactPortal { // eslint-disable-line @typescript-eslint/no-explicit-any
  return createPortal(<Model props={props}>
    <Ui />
  </Model>, document.body);
}
