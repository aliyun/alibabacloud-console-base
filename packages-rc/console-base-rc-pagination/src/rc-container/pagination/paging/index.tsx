import React from 'react';

import {
  useTheme
} from '../../../model';

import PageInfo from './page-info';
import PageList from './page-list';

export default function Paging(): JSX.Element {
  const theme = useTheme();
  
  return theme === 'full' ? <PageList /> : <PageInfo />;
}
