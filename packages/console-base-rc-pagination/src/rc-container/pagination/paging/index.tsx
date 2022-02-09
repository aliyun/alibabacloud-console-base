import React from 'react';

import {
  useProps
} from '../../../model';

import PageInfo from './page-info';
import PageList from './page-list';

export default function Paging(): JSX.Element {
  const {
    theme
  } = useProps();
  
  return theme === 'full' ? <PageList /> : <PageInfo />;
}
