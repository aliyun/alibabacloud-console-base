import React, {
  useState,
  useCallback
} from 'react';

import {
  INavItemPropsParsed
} from '../../model';
import NavItemIconRight from '../../rc/nav-item-icon-right';
import NavItem from '../nav-item';

export default function NavItemWithSub(props: INavItemPropsParsed): JSX.Element {
  const [stateUnfolded, setStateUnfolded] = useState(props.subItemsUnfolded);
  const handleToggleUnfolded = useCallback(() => setStateUnfolded(!stateUnfolded), [stateUnfolded, setStateUnfolded]);
  
  return <>
    <NavItem {...{
      ...props,
      iconRight: <NavItemIconRight type="angle-up" rotate={stateUnfolded ? 0 : 180} />,
      onClick: handleToggleUnfolded
    }} />
    <div style={{
      display: stateUnfolded ? 'block' : 'none'
    }}>
      {props.subItems.map((v, i) => {
        if (v.subItems.length) {
          return <NavItemWithSub {...v} key={v.key || `sub-${i}`} />;
        }
        
        return <NavItem {...v} key={v.key || `item-${i}`} />;
      })}
    </div>
  </>;
}