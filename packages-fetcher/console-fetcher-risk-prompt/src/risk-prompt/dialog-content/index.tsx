import React from 'react';

import Provider, {
  ModelProps
} from '../../model';
import DialogContentUi from '../../rc-container/dialog-content-ui';

export default function DialogContent(props: ModelProps): JSX.Element {
  return <Provider props={props}>
    <DialogContentUi />
  </Provider>;
}