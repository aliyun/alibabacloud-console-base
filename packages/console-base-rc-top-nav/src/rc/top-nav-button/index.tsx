import React, {
  MouseEvent,
  useState,
  useCallback
} from 'react';

import Dropdown from '@alicloud/console-base-rc-dropdown';

import {
  IPropsTopNavButton
} from '../../types';
import parseDropdownItems from '../../util/parse-dropdown-items';
import hasNoActionPoint from '../../util/has-no-action-point';
import NavButton from '../nav-button';
import NavButtonLabel from '../nav-button-label';
import NavButtonItems from '../nav-button-items';

interface IProps extends Omit<IPropsTopNavButton, 'key'> {
  spm: string;
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
  onMouseEnter,
  onMouseLeave,
  ...buttonProps
}: IProps): JSX.Element | null {
  const [stateHovered, setStateHovered] = useState<boolean>(false);
  const handleMouseEnter = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setStateHovered(true);
    
    if (onMouseEnter) {
      onMouseEnter(e);
    }
  }, [onMouseEnter]);
  const handleMouseLeave = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setStateHovered(false);
    
    if (onMouseLeave) {
      onMouseLeave(e);
    }
  }, [onMouseLeave]);
  const {
    items = [],
    header,
    body,
    footer,
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
    return jsxButton;
  }
  
  return <Dropdown {...{
    align: 'right',
    offset: [0, -10],
    bodyPadding: itemsInFooter.length ? 'top' : undefined,
    ...dropdownProps,
    trigger: jsxButton,
    header,
    body: body || (itemsInBody.length ? <NavButtonItems items={itemsInBody} /> : undefined),
    footer: footer || (itemsInFooter.length ? <NavButtonItems items={itemsInFooter} /> : undefined)
  }} />;
}

export type {
  IProps as TopNavButtonProps
};
