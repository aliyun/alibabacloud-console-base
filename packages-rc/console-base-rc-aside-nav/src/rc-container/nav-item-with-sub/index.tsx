import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  mixinBgAccent
} from '@alicloud/console-base-theme';

import {
  IParsedItem,
  TParsedItemOrDivider,
  hasSelectedSubItem,
  useFiltering
} from '../../model';
import {
  NavItemIconRight,
  NavDivider
} from '../../rc';
import NavItem from '../nav-item';

interface IScProps {
  semiSelected: boolean;
}

const ScNavItemParent = styled(NavItem)<IScProps>`
  &:after {
    ${props => (props.semiSelected ? mixinBgAccent : null)}
  }
`;

function renderItemOrDividerList(list: TParsedItemOrDivider[]): JSX.Element[] {
  return list.map(v => {
    if (v.divider) {
      return <NavDivider key={v.key} indent={v.indent} />;
    }
    
    if (v.subItems.length) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      return <NavItemWithSub {...v} />;
    }
    
    return <NavItem {...v} />;
  });
}

function NavItemWithSub(props: IParsedItem): JSX.Element {
  const [stateUnfolded, setStateUnfolded] = useState(props.subItemsUnfolded);
  const filtering = useFiltering();
  const handleToggleUnfolded = useCallback(() => setStateUnfolded(!stateUnfolded), [stateUnfolded, setStateUnfolded]);

  return <>
    <ScNavItemParent {...{
      ...props,
      semiSelected: !props.selected && !stateUnfolded && hasSelectedSubItem(props),
      iconRight: <NavItemIconRight type="angle-right" rotate={stateUnfolded || filtering ? 90 : 0} />,
      onClick: handleToggleUnfolded
    }} />
    <div style={{
      display: stateUnfolded || filtering ? 'block' : 'none'
    }}>
      {renderItemOrDividerList(props.subItems)}
    </div>
  </>;
}

export default NavItemWithSub;

export {
  renderItemOrDividerList
};