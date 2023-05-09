import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinBgPrimary,
  mixinBgAccent,
  mixinTextPrimary,
  mixinTextSecondary,
  mixinTextAccent,
  mixinBorderSecondaryRight
} from '@alicloud/console-base-theme';

import {
  TabsVariant,
  ModelPropsTab,
  useProps,
  useActiveTab
} from '../../../../../model';
import {
  TAB_MAX_WIDTH,
  TAB_HEIGHT, TAB_MIN_WIDTH
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

const cssCommon = css`
  display: inline-block;
  position: relative;
  min-width: ${TAB_MIN_WIDTH}px;
  max-width: ${TAB_MAX_WIDTH}px;
  line-height: ${TAB_HEIGHT}px;
  transition: all 200ms ease-in-out;
`;

const cssPlain = css`
  &:hover {
    ${mixinTextAccent}
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 1px;
    transition: all linear 200ms;
    ${mixinBgAccent}
  }
`;
const cssPlainActive = css`
  ${mixinTextAccent}
  
  &:after {
    left: 0;
    width: 100%;
  }
`;
const cssBrowser = css`
  ${mixinTextSecondary}
  ${mixinBorderSecondaryRight}
`;
const cssBrowserActive = css`
  z-index: 10;
  ${mixinBgPrimary}
  ${mixinTextPrimary}
`;

const ScTabItem = styled.li<IScProps>`
  ${cssCommon}
  
  ${props => {
    switch (props.$variant) {
      case TabsVariant.BROWSER:
        return cssBrowser;
      default:
        return cssPlain;
    }
  }}
  ${props => {
    if (!props.$active) {
      return null;
    }
    
    switch (props.$variant) {
      case TabsVariant.BROWSER:
        return cssBrowserActive;
      default:
        return cssPlainActive;
    }
  }}
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
