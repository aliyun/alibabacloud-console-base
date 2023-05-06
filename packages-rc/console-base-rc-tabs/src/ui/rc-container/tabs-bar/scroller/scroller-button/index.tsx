import React from 'react';

import Icon from '@alicloud/console-base-rc-icon';

import {
  useStateNavOffset,
  useStateNavOffsetMax,
  useHandleScrollLeft,
  useHandleScrollRight
} from '../../../../../model';
import {
  ControlButton
} from '../../../../rc';

interface IProps {
  prev?: boolean;
}

export default function ScrollerButton({
  prev
}: IProps): JSX.Element {
  const navOffset = useStateNavOffset();
  const navOffsetMax = useStateNavOffsetMax();
  const handleScrollLeft = useHandleScrollLeft();
  const handleScrollRight = useHandleScrollRight();
  
  return <ControlButton {...{
    disabled: prev ? navOffset >= 0 : navOffset <= navOffsetMax,
    spm: prev ? 'prev' : 'next',
    label: <Icon type={prev ? 'angle-left' : 'angle-right'} />,
    onClick: prev ? handleScrollLeft : handleScrollRight
  }} />;
}
