import React, {
  useState
} from 'react';
import styled from 'styled-components';

import {
  mixinTypoFontBase,
  mixinTextSecondary
} from '@alicloud/console-base-theme';
import {
  LongArticle
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import GotoEnds from '../../src';
import PkgInfo from '../pkg-info';

const ScHolder = styled.div`
  position: relative;
`;

const ScContainer = styled.div`
  height: 800px;
  overflow: auto;
`;

const ScEditor = styled.div`
  padding: 8px;
  box-sizing: border-box;
  background-color: rgba(0, 200, 0, 0.05);
  min-height: 100%;
  line-height: 2;
  font-size: 14px;
  ${mixinTypoFontBase}
  ${mixinTextSecondary}
`;

export default function DemoDefault(): JSX.Element {
  const [stateContainer, setStateContainer] = useState<HTMLDivElement | null>(null);
  const [stateContainerInner, setStateContainerInner] = useState<HTMLDivElement | null>(null);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <ScHolder>
      <ScContainer ref={setStateContainer}>
        <ScEditor contentEditable ref={setStateContainerInner}>
          <LongArticle />
        </ScEditor>
      </ScContainer>
      <GotoEnds {...{
        container: stateContainer,
        containerInner: stateContainerInner
      }} />
    </ScHolder>
  </>;
}
