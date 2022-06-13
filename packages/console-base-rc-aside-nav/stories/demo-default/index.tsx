import React, {
  useState
} from 'react';
import styled, {
  createGlobalStyle
} from 'styled-components';

import {
  H1,
  P,
  RadioGroup,
  InputText,
  InputSwitch
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';

import pkgInfo from '../../package.json';
import AsideNav from '../../src';
import {
  NAV
} from '../const';

interface IScAside {
  collapsed?: boolean;
}

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
  }
`;

const ScSite = styled.div`
  display: flex;
  height: 100vh;
`;

const ScAide = styled.aside<IScAside>`
  position: relative;
  width: ${props => (props.collapsed ? 0 : 220)}px;
  transition: all linear 200ms;
`;

const ScSiteMain = styled.main`
  flex: 1;
  order: 1;
  padding: 0 16px;
  height: 100%;
  overflow-y: auto;
`;

type TKey = keyof typeof NAV;

export default function DemoDefault(): JSX.Element {
  const [stateNavKey, setStateNavKey] = useState<TKey>('VIPER');
  const [stateCollapsed, setStateCollapsed] = useState(false);
  const [stateUpperLevel, setStateUpperLevel] = useState(false);
  const [stateUpperTitle, setStateUpperTitle] = useState('');
  const navProps = NAV[stateNavKey];
  
  return <ScSite>
    <GlobalStyle />
    <ScAide collapsed={stateCollapsed}>
      <AsideNav {...{
        ...navProps,
        upperTitle: stateUpperTitle,
        upperHref: stateUpperLevel ? '#/back-to-upper-level' : undefined,
        collapsed: stateCollapsed,
        onToggleCollapsed: setStateCollapsed
      }} />
    </ScAide>
    <ScSiteMain>
      <ThemeSwitcher />
      <H1>{pkgInfo.name}@{pkgInfo.version}</H1>
      <P>{pkgInfo.description}</P>
      <RadioGroup<TKey> {...{
        value: stateNavKey,
        items: Object.keys(NAV).map(v => ({
          label: v,
          value: v as TKey
        })),
        onChange: setStateNavKey
      }} />
      <InputSwitch {...{
        label: 'props.collapsed',
        value: stateCollapsed,
        onChange: setStateCollapsed
      }} />
      <InputSwitch {...{
        label: 'UpperLevel',
        value: stateUpperLevel,
        onChange: setStateUpperLevel
      }} />
      <InputText {...{
        placeholder: 'props.upperTitle',
        disabled: !stateUpperLevel,
        value: stateUpperTitle,
        onChange: setStateUpperTitle
      }} />
    </ScSiteMain>
  </ScSite>;
}
