import React from 'react';

import Provider, {
  ModelProps
} from '../model';
import Ui from '../ui';

export default function WithProvider(props: ModelProps): JSX.Element {
  return <Provider props={props}>
    <Ui />
  </Provider>;
}
