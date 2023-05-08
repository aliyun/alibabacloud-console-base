import React from 'react';
import styled from 'styled-components';

import Icon from '@alicloud/console-base-rc-icon';
import Button, {
  ButtonTheme,
  ButtonSize
} from '@alicloud/console-base-rc-button';

import {
  useProps,
  useStateNavOffset,
  useStateNavOffsetMax,
  useHandleScrollLeft,
  useHandleScrollRight
} from '../../../../model';
import {
  TAB_HEIGHT,
  TAB_SCROLL_BUTTON_WIDTH,
  TAB_SCROLL_BUTTON_FONT_SIZE
} from '../../../const';

const ScTabScrollButtons = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;
  height: ${TAB_HEIGHT}px;
`;
const ScButton = styled(Button)`
  width: ${TAB_SCROLL_BUTTON_WIDTH}px;
  height: ${TAB_HEIGHT}px;
  font-size: ${TAB_SCROLL_BUTTON_FONT_SIZE}px;
`;

// 左滚右滚按钮条
export default function TabScrollButtons(): JSX.Element {
  const {
    classNameForTabScroller
  } = useProps();
  const navOffset = useStateNavOffset();
  const navOffsetMax = useStateNavOffsetMax();
  const handleScrollLeft = useHandleScrollLeft();
  const handleScrollRight = useHandleScrollRight();
  
  return <ScTabScrollButtons className={classNameForTabScroller}>
    <ScButton {...{
      spm: 'prev',
      theme: ButtonTheme.NONE,
      size: ButtonSize.NONE,
      disabled: navOffset >= 0,
      label: <Icon type="angle-left" />,
      onClick: handleScrollLeft
    }} />
    <ScButton {...{
      spm: 'next',
      theme: ButtonTheme.NONE,
      size: ButtonSize.NONE,
      disabled: navOffset <= navOffsetMax,
      label: <Icon type="angle-right" />,
      onClick: handleScrollRight
    }} />
  </ScTabScrollButtons>;
}
