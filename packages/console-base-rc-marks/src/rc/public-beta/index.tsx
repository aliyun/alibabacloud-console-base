import React from 'react';

import {
  IPropsMark
} from '../../types';
import {
  EMarkType
} from '../../const';
import Mark from '../_base';

export default function PublicBeta(props: IPropsMark): JSX.Element {
  return <Mark {...{
    ...props,
    type: EMarkType.PUBLIC_BETA
  }} />;
}
