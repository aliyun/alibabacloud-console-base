import React from 'react';
import styled from 'styled-components';

import Icon from '@alicloud/console-base-rc-icon';

import {
  BGC_TAB_BAR,
  HEIGHT_TAB,
  TAB_TOP_SPACE
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
  position: absolute;
  top: ${TAB_TOP_SPACE}px;
  right: 0;
  z-index: 2;
  padding: 0 4px;
  background-color: ${BGC_TAB_BAR};
  height: ${HEIGHT_TAB}px;
  color: #fff;
`;

export default function Scroller(): JSX.Element {
  const {
    classNameForTabScroller
  } = useProps();
  const navOffset = useStateNavOffset();
  const navOffsetMax = useStateNavOffsetMax();
  
  const onScrollLeft = useHandleScrollLeft();
  const onScrollRight = useHandleScrollRight();
  
  return <ScScroller className={classNameForTabScroller}>
    <ControlButton {...{
      disabled: navOffset >= 0,
      spm: 'prev',
      label: <Icon type="angle-left" />,
      light: true,
      onClick: onScrollLeft
    }} />
    <ControlButton {...{
      disabled: navOffset <= navOffsetMax,
      spm: 'next',
      label: <Icon type="angle-right" />,
      light: true,
      onClick: onScrollRight
    }} />
  </ScScroller>;
}
