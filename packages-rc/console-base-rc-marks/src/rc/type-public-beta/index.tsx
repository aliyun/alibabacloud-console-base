import React from 'react';

import {
  IPropsMark
} from '../../types';
import MarkByType from '../mark-by-type';

export default function PublicBeta(props: IPropsMark): JSX.Element {
  return <MarkByType {...{
    ...props,
    type: 'PUBLIC_BETA'
  }} />;
}
