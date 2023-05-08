import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinBgPrimary,
  mixinBgSecondary,
  mixinBgAccent,
  mixinTextPrimary,
  mixinTextSecondary,
  mixinTextAccent,
  mixinBorderSecondaryRight,
  mixinBorderSecondaryBottom
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
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 1px;
    transition: all linear 200ms;
  }
`;

const cssPlain = css`
  &:hover {
    ${mixinTextAccent}
  }
  
  &:after {
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
  ${mixinBgSecondary}
  ${mixinTextSecondary}
  ${mixinBorderSecondaryRight}
  
  &:after {
    left: 0;
    width: 100%;
    ${mixinBorderSecondaryBottom}
  }
`;
const cssBrowserActive = css`
  ${mixinBgPrimary}
  ${mixinTextPrimary}
  
  &:after {
    left: 50%;
    width: 0;
  }
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
    {active && tab.closable ? <TabX tab={tab} /> : null}
  </ScTabItem>;
}
