import React from 'react';

import {
  IPropsMark
} from '../../types';
import MarkByType from '../mark-by-type';

export default function Update(props: IPropsMark): JSX.Element {
  return <MarkByType {...{
    ...props,
    type: 'UPDATE'
  }} />;
}
