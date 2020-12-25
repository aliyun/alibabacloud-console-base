import React from 'react';
import styled from 'styled-components';

import {
  button,
  typo
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';

import {
  IPropsTab
} from '../../../types';
import {
  HEIGHT_TAB,
  BGC_TAB_ACTIVE,
  BGC_TAB_IDLE,
  FGC_TAB_ACTIVE,
  FGC_TAB_IDLE,
  MAX_WIDTH_TAB,
  MIN_WIDTH_TAB,
  TAB_TOP_SPACE
} from '../../../const';
import intl from '../../../intl';
import {
  useRefNav,
  usePropClassNameForTabItem,
  useStateNavOffset,
  useTabs,
  useActiveTab,
  useDispatchActivateTab,
  useDispatchCloseTab
} from '../../../model';
import ControlButton from '../../../rc/control-button';

const ScNav = styled.nav`
  display: inline-block;
  padding-left: 16px;
  white-space: nowrap;
  transition: transform 0.3s ease-in;
`;

const ScNavItem = styled.div`
  display: inline-block;
  position: relative;
  margin-top: ${TAB_TOP_SPACE}px;
  padding-top: 2px;
  max-width: 100%;
  line-height: ${HEIGHT_TAB}px;
  
  &:after {
    content: '|';
    display: ${props => (props['data-active'] ? 'none' : 'inline')};
    position: absolute;
    top: 0;
    right: -3px;
    z-index: 1;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.34);
  }
  
  &:last-child {
    &:after {
      display: none;
    }
  }
`;

const ScTab = styled.button`
  ${button.reset};
  ${typo.ellipsis};
  padding: 0 ${props => (props['data-closable'] ? 28 : 12)}px 0 12px;
  border-radius: 4px 4px 0 0;
  background-color: ${props => (props['data-active'] ? BGC_TAB_ACTIVE : BGC_TAB_IDLE)};
  min-width: ${MIN_WIDTH_TAB}px;
  max-width: ${MAX_WIDTH_TAB}px;
  height: ${HEIGHT_TAB}px;
  cursor: default;
  color: ${props => (props['data-active'] ? FGC_TAB_ACTIVE : FGC_TAB_IDLE)};
`;

const ScTabX = styled(ControlButton)`
  position: absolute;
  top: 7px;
  right: 6px;
`;

function getTitleAttr({
  title
}: IPropsTab): string | undefined {
  return typeof title === 'string' ? title : undefined;
}

export default function Nav(): JSX.Element {
  const refNav = useRefNav();
  const className = usePropClassNameForTabItem();
  const navOffset = useStateNavOffset();
  const tabs = useTabs();
  const activeTab = useActiveTab();
  const dispatchActivateTab = useDispatchActivateTab();
  const dispatchCloseTab = useDispatchCloseTab();
  
  return <ScNav {...{
    ref: refNav,
    style: {
      transform: `translate(${navOffset}px, 0)`
    }
  }}>
    {tabs.map((v, i): JSX.Element => {
      const active = activeTab === v;
      
      return <ScNavItem {...{
        key: i,
        className,
        'data-active': active ? 1 : ''
      }}>
        <ScTab {...{
          'data-closable': v.closable ? 1 : '',
          'data-active': active ? 1 : '',
          title: getTitleAttr(v),
          onClick: () => dispatchActivateTab(v)
        }}>{v.title}</ScTab>
        {v.closable ? <ScTabX {...{
          spm: 'x',
          title: intl('op:close'),
          light: !active,
          label: <Icon type="x" />,
          onClick: () => dispatchCloseTab(v)
        }} /> : null}
      </ScNavItem>;
    })}
  </ScNav>;
}
