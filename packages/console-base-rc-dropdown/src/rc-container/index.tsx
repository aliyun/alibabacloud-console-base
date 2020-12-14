import React from 'react';

import {
  IPropsDropdown
} from '../types';
import Provider from '../model';

import Ui from './ui';

export default function DropdownWithProvider(props: IPropsDropdown): JSX.Element {
  return <Provider props={props}>
    <Ui />
  </Provider>;
}
