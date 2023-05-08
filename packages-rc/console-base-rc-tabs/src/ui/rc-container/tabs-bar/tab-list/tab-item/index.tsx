import React from 'react';
import styled, {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinBgAccent
} from '@alicloud/console-base-theme';

import {
  TabsVariant,
  ModelPropsTab,
  useProps,
  useActiveTab
} from '../../../../../model';
import {
  TAB_HEIGHT
} from '../../../../const';

import TabButton from './tab-button';
import TabX from './tab-x';

interface IProps {
  tab: ModelPropsTab;
}

interface IScProps {
  $variant?: TabsVariant;
  $active?: boolean;
}

function getCssTabItemAfter(props: IScProps): FlattenSimpleInterpolation | null {
  switch (props.$variant) {
    case TabsVariant.BROWSER:
      return null;
    default:
      return css`
  bottom: 0;
  left: ${props.$active ? 0 : '50%'};
  width: ${props.$active ? '100%' : 0};
  height: 1px;
  ${mixinBgAccent}
`;
  }
}

const ScTabItem = styled.li<IScProps>`
  display: inline-block;
  position: relative;
  max-width: 100%;
  line-height: ${TAB_HEIGHT}px;
  
  &:after {
    content: '';
    position: absolute;
    transition: all linear 200ms;
    ${getCssTabItemAfter}
  }
  
  &:last-child {
    &:after {
      display: ${props => (props.$variant === TabsVariant.BROWSER ? 'none' : 'block')};
    }
  }
`;

export default function NavItem({
  tab
}: IProps): JSX.Element {
  const {
    variant,
    classNameForTabItem
  } = useProps();
  const active = useActiveTab() === tab;
  
  return <ScTabItem {...{
    $variant: variant,
    $active: active,
    className: classNameForTabItem
  }}>
    <TabButton tab={tab} />
    <TabX tab={tab} />
  </ScTabItem>;
}
