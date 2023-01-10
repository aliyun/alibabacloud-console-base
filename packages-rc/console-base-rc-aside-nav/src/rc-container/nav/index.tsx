import React from 'react';

import {
  useItems
} from '../../model';
import {
  renderItemOrDividerList
} from '../nav-item-with-sub';

export default function Nav(): JSX.Element {
  const items = useItems();

  return <nav>{renderItemOrDividerList(items)}</nav>;
}