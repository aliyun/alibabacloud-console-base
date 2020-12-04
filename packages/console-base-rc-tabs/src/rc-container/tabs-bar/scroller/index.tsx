import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import Icon from '@alicloud/console-base-rc-icon';

import {
  BGC_TAB_BAR,
  HEIGHT_TAB,
  TAB_TOP_SPACE
} from '../../../const';
import {
  useRefTabs,
  usePropClassNameForTabScroller,
  useStateNavOffset,
  useStateNavOffsetMax,
  useDispatchUpdateNavOffset
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
  const refTabs = useRefTabs();
  const className = usePropClassNameForTabScroller();
  const navOffset = useStateNavOffset();
  const navOffsetMax = useStateNavOffsetMax();
  const dispatchUpdateNavOffset = useDispatchUpdateNavOffset();
  
  const handleScrollBy = useCallback((deltaOffset: number): void => {
    dispatchUpdateNavOffset(navOffset + deltaOffset);
  }, [navOffset, dispatchUpdateNavOffset]);
  
  const handleScrollLeft = useCallback((): void => {
    handleScrollBy(refTabs.current.offsetWidth);
  }, [refTabs, handleScrollBy]);
  
  const handleScrollRight = useCallback((): void => {
    handleScrollBy(-refTabs.current.offsetWidth);
  }, [refTabs, handleScrollBy]);
  
  return <ScScroller className={className}>
    <ControlButton {...{
      disabled: navOffset >= 0,
      spm: 'prev',
      label: <Icon type="angle-left" />,
      light: true,
      onClick: handleScrollLeft
    }} />
    <ControlButton {...{
      disabled: navOffset <= navOffsetMax,
      spm: 'next',
      label: <Icon type="angle-right" />,
      light: true,
      onClick: handleScrollRight
    }} />
  </ScScroller>;
}
