import React from 'react';
import styled from 'styled-components';

import {
  mixinBgPrimary,
  mixinTextSecondary
} from '@alicloud/console-base-theme';

import Rnd from '../rnd';
import Toolbar from '../toolbar';
import Content from '../content';

const ScUi = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ScContent = styled.div`
  flex: 1;
  overflow: auto;
  ${mixinBgPrimary}
  ${mixinTextSecondary}
`;

/**
 * Rnd 的 style.display 强奸成 inline-block，所以内部需要再包一层
 */
export default function Ui(): JSX.Element {
  return <Rnd>
    <ScUi>
      <Toolbar />
      <ScContent>
        <Content />
      </ScContent>
    </ScUi>
  </Rnd>;
}
