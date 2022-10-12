import React from 'react';

import Provider, {
  ModelProps
} from '../model';

import Ui from './ui';
import GlobalStyleForFixed from './global-style-for-fixed';

export default function WithProvider(props: ModelProps): JSX.Element {
  return <Provider props={props}>
    <GlobalStyleForFixed />
    <Ui />
  </Provider>;
}
