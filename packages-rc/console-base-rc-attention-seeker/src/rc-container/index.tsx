import React from 'react';

import Model, {
  IModelProps
} from '../model';
import GlobalStyle from '../rc/global-style';

import Ui from './ui';

export default function WithProvider(props: IModelProps): JSX.Element {
  return <Model props={props}>
    <GlobalStyle />
    <Ui />
  </Model>;
}
