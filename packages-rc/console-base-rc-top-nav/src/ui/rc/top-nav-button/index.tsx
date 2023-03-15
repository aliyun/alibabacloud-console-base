import React, {
  MouseEvent,
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import Dropdown from '@alicloud/console-base-rc-dropdown';
import Beacon, {
  BeaconProps
} from '@alicloud/console-base-rc-beacon';

import {
  ModelPropsButton
} from '../../../model';
import {
  parseDropdownItems,
  hasNoActionPoint
} from '../../util';

import NavButton from './nav-button';
import NavButtonLabel from './nav-button-label';
import NavButtonItems from './nav-button-items';

interface IProps extends Omit<ModelPropsButton, 'key'> {
  spm: string;
}

const ScBeaconWrap = styled.div`
  position: relative;
`;

function wrapWithBeacon(jsx: JSX.Element, beacon?: BeaconProps): JSX.Element {
  return beacon ? <ScBeaconWrap>
    {jsx}
    <Beacon {...{
      style: {
        bottom: 16,
        left: 14
      },
      tipAlign: 'bl',
      ...beacon
    }} />
  </ScBeaconWrap> : jsx;
}

/**
 * 预设样式 - 顶栏上的按钮（文字或按钮）
 */
export default function TopNavButton({
  label,
  labelHover,
  responsive = true,
  force,
  dropdown = {},
  beacon,
  onMouseEnter,
  onMouseLeave,
  ...buttonProps
}: IProps): JSX.Element | null {
  const [stateHovered, setStateHovered] = useState<boolean>(false);
  const handleMouseEnter = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setStateHovered(true);
    onMouseEnter?.(e);
  }, [onMouseEnter]);
  const handleMouseLeave = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setStateHovered(false);
    onMouseLeave?.(e);
  }, [onMouseLeave]);
  const {
    items = [],
    header,
    body,
    footer,
    footerDivider,
    ...dropdownProps
  } = dropdown;
  const [itemsInBody, itemsInFooter] = parseDropdownItems(items);
  const noAction = hasNoActionPoint(buttonProps); // 没有行动点
  const noDropdown = !itemsInBody.length && !header && !body && !footer; // 没有下拉
  
  if (!force && noAction && noDropdown) { // 既没有行动点，有没有下拉，默认不展示，除非 force
    return null;
  }
  
  const jsxButton = <NavButton {...{
    label: <NavButtonLabel label={stateHovered && labelHover ? labelHover : label} />,
    responsive,
    ...buttonProps,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }} />;
  
  if (noDropdown) {
    return wrapWithBeacon(jsxButton, beacon);
  }
  
  return wrapWithBeacon(<Dropdown {...{
    align: 'right',
    offset: [0, -4],
    bodyPadding: itemsInFooter.length ? 'top' : undefined,
    footerDivider: footerDivider ?? itemsInFooter.length > 0,
    ...dropdownProps,
    trigger: jsxButton,
    header,
    body: body || (itemsInBody.length ? <NavButtonItems items={itemsInBody} /> : undefined),
    footer: footer || (itemsInFooter.length ? <NavButtonItems items={itemsInFooter} /> : undefined)
  }} />, beacon);
}
