import React from 'react';
import styled from 'styled-components';

import {
  HEIGHT_TAB
} from '../../../const';
import {
  useProps
} from '../../../model';

import ScrollerButton from './scroller-button';

const ScScroller = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;
  padding: 0 4px;
  height: ${HEIGHT_TAB}px;
`;

// 左滚右滚按钮条
export default function Scroller(): JSX.Element {
  const {
    theme,
    classNameForTabScroller
  } = useProps();
  
  return <ScScroller theme={theme} className={classNameForTabScroller}>
    <ScrollerButton prev />
    <ScrollerButton />
  </ScScroller>;
}
