import React from 'react';

import {
  IPropsAttentionSeeker
} from '../types';
import Model from '../model';
import GlobalStyle from '../rc/global-style';

import Ui from './ui';

export default function WithProvider(props: IPropsAttentionSeeker): JSX.Element {
  return <Model props={props}>
    <GlobalStyle />
    <Ui />
  </Model>;
}
