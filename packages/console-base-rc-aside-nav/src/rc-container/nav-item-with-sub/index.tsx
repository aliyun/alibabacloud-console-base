import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  mixinBgAccent
} from '@alicloud/console-base-theme';

import {
  INavItemPropsParsed,
  hasSelectedSubItem
} from '../../model';
import NavItemIconRight from '../../rc/nav-item-icon-right';
import NavItem from '../nav-item';

interface IScProps {
  semiSelected: boolean;
}

const ScNavItemParent = styled(NavItem)<IScProps>`
  &:after {
    ${props => (props.semiSelected ? mixinBgAccent : null)}
  }
`;

export default function NavItemWithSub(props: INavItemPropsParsed): JSX.Element {
  const [stateUnfolded, setStateUnfolded] = useState(props.subItemsUnfolded);
  const handleToggleUnfolded = useCallback(() => setStateUnfolded(!stateUnfolded), [stateUnfolded, setStateUnfolded]);
  
  return <>
    <ScNavItemParent {...{
      ...props,
      semiSelected: !props.selected && !stateUnfolded && hasSelectedSubItem(props),
      iconRight: <NavItemIconRight type="angle-right" rotate={stateUnfolded ? 90 : 0} />,
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