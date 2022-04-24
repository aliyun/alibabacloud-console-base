import React from 'react';

import {
  useItems
} from '../../model';
import NavDivider from '../../rc/nav-divider';
import NavItem from '../nav-item';
import NavItemWithSub from '../nav-item-with-sub';

export default function Nav(): JSX.Element {
  const items = useItems();
  
  return <nav>
    {items.map((v, i) => {
      if (v === '-') {
        return <NavDivider key={`divider-${i}`} />; // eslint-disable-line react/no-array-index-key
      }
      
      if (v.subItems.length) {
        return <NavItemWithSub {...v} key={v.key || `sub-${i}`} />;
      }
      
      return <NavItem {...v} key={v.key || `item-${i}`} />;
    })}
  </nav>;
}
