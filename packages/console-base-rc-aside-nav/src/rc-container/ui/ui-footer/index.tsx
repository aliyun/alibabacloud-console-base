import React from 'react';
import styled from 'styled-components';

import {
  mixinBorderTertiaryTop
} from '@alicloud/console-base-theme';

import {
  useItemsInFooter
} from '../../../model';
import NavItemInFooter from '../../nav-item-in-footer';

const ScFooter = styled.div`
  ${mixinBorderTertiaryTop}
`;

export default function UiFooter(): JSX.Element | null {
  const itemsInFooter = useItemsInFooter();
  
  if (!itemsInFooter.length) {
    return null;
  }
  
  return <ScFooter>
    {itemsInFooter.map((v, i) => <NavItemInFooter {...v} key={v.key || `item-in-footer-${i}`} />)}
  </ScFooter>;
}