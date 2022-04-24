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
  InputSwitch
} from '@alicloud/demo-rc-elements';

import pkgInfo from '../../package.json';
import AsideNav from '../../src';
import {
  NAV
} from '../const';

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

const ScSiteSide = styled.aside`
  position: relative;
  width: 220px;
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
  const [stateUpperLevel, setStateUpperLevel] = useState(false);
  const navProps = NAV[stateNavKey];
  
  return <ScSite>
    <GlobalStyle />
    <ScSiteSide>
      <AsideNav {...navProps} upperHref={stateUpperLevel ? '#/back-to-upper-level' : undefined} />
    </ScSiteSide>
    <ScSiteMain>
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
        label: 'UpperLevel',
        value: stateUpperLevel,
        onChange: setStateUpperLevel
      }} />
    </ScSiteMain>
  </ScSite>;
}
