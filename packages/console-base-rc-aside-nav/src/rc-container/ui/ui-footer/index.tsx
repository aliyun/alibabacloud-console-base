import React from 'react';
import styled from 'styled-components';

import {
  mixinBorderPrimaryTop
} from '@alicloud/console-base-theme';

import {
  useItemsInFooter
} from '../../../model';
import NavItemInFooter from '../../nav-item-in-footer';

// 必须 overflow:hidden 否则 collapsed 状态会侧漏
const ScFooter = styled.footer`
  overflow: hidden;
  ${mixinBorderPrimaryTop}
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