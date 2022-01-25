import React from 'react';
import styled from 'styled-components';

import Icon from '@alicloud/console-base-rc-icon';

import {
  HEIGHT_TAB
} from '../../../const';
import {
  useProps,
  useStateNavOffset,
  useStateNavOffsetMax,
  useHandleScrollLeft,
  useHandleScrollRight
} from '../../../model';
import ControlButton from '../../../rc/control-button';

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
  const navOffset = useStateNavOffset();
  const navOffsetMax = useStateNavOffsetMax();
  const handleScrollLeft = useHandleScrollLeft();
  const handleScrollRight = useHandleScrollRight();
  
  return <ScScroller theme={theme} className={classNameForTabScroller}>
    <ControlButton {...{
      disabled: navOffset >= 0,
      spm: 'prev',
      label: <Icon type="angle-left" />,
      onClick: handleScrollLeft
    }} />
    <ControlButton {...{
      disabled: navOffset <= navOffsetMax,
      spm: 'next',
      label: <Icon type="angle-right" />,
      onClick: handleScrollRight
    }} />
  </ScScroller>;
}
