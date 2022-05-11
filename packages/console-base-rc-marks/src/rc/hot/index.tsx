import React from 'react';

import {
  EMarkType
} from '../../enum';
import {
  IPropsMark
} from '../../types';
import Mark from '../_base';

export default function Hot(props: IPropsMark): JSX.Element {
  return <Mark {...{
    ...props,
    type: EMarkType.HOT
  }} />;
}
