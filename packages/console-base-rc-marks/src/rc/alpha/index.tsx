import React from 'react';

import {
  IPropsMark
} from '../../types';
import {
  EMarkType
} from '../../const';
import Mark from '../_base';

export default function Alpha(props: IPropsMark): JSX.Element {
  return <Mark {...{
    ...props,
    type: EMarkType.ALPHA
  }} />;
}
