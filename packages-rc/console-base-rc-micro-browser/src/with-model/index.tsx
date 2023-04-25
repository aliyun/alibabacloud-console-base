import React from 'react';
import {
  createPortal
} from 'react-dom';

import Provider, {
  IModelProps
} from '../model';
import Ui from '../ui';

export default function WithProvider(props: IModelProps): JSX.Element {
  return createPortal(<Provider {...props}>
    <Ui />
  </Provider>, document.body);
}
