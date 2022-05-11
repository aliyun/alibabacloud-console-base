import React from 'react';

import {
  useHidden
} from '../../model';
import Pagination from '../pagination';

export default function Ui(): JSX.Element | null {
  const hidden = useHidden();
  
  return hidden ? null : <Pagination />;
}
