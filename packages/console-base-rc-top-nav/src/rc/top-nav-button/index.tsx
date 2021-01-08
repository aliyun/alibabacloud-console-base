import React, {
  MouseEvent,
  useState,
  useCallback
} from 'react';
import styled, {
  css
} from 'styled-components';

import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import Dropdown from '@alicloud/console-base-rc-dropdown';

import {
  IPropsTopNavButton
} from '../../types';
import parseDropdownItems from '../../util/parse-dropdown-items';
import hasNoActionPoint from '../../util/has-no-action-point';

import MenuItems from './menu-items';
import ButtonLabel from './button-label';

interface IPropsScButton {
  responsive?: boolean;
}

interface IProps extends Omit<IPropsTopNavButton, 'key'> {
  spm: string;
}

// `display: block !important;` 让 button 和 a 水平对齐，防止 Button 自身的样式干扰
const ScButton = styled(Button)<IPropsScButton>`
  display: block !important;
  position: relative;
  padding: 0 10px;
  border: 0;
  height: 50px;
  line-height: 50px;
  
  ${props => (props.responsive ? css`
    @media screen and (max-width: 1208px) {
      padding: 0 6px;
    }
  ` : null)};
  
  img {
    display: inline;
    max-width: 160px;
    max-height: 36px;
  }
`;

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
  
  const jsxButton = <ScButton {...{
    theme: ButtonTheme.TEXT_BRAND_SECONDARY,
    label: <ButtonLabel label={stateHovered && labelHover ? labelHover : label} />,
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
    body: body || (itemsInBody.length ? <MenuItems items={itemsInBody} /> : undefined),
    footer: footer || (itemsInFooter.length ? <MenuItems items={itemsInFooter} /> : undefined)
  }} />;
}
