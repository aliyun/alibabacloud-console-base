import React from 'react';
import styled, {
  css
} from 'styled-components';

import Button, {
  EButtonThemeColor
} from '@alicloud/console-base-rc-button';
import Dropdown from '@alicloud/console-base-rc-dropdown';

import {
  ITopNavButton
} from '../../types';
import parseDropdownItems from '../../util/parse-dropdown-items';
import hasNoActionPoint from '../../util/has-no-action-point';

import MenuItems from './menu-items';
import ButtonLabel from './button-label';

interface IPropsScButton {
  responsive?: boolean;
}

interface IProps extends Omit<ITopNavButton, 'key'> {
  spm: string;
}

// `display: block !important;` 让 button 和 a 水平对齐，防止 Button 自身的样式干扰
const ScButton = styled(Button)<IPropsScButton>`
  display: block !important;
  position: relative;
  padding: 0 12px;
  border: 0;
  height: 50px;
  line-height: 50px;
  
  img {
    display: block;
    max-width: 160px;
    max-height: 36px;
  }
  
  ${props => (props.responsive ? css`
    @media screen and (max-width: 1208px) {
      padding: 0 6px;
    }
  ` : null)};
`;

/**
 * 预设样式 - 顶栏上的按钮（文字或按钮）
 */
export default function ButtonInTop({
  label,
  responsive = true,
  force,
  dropdown = {},
  ...buttonProps
}: IProps): JSX.Element | null {
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
    themeColor: EButtonThemeColor.NORMAL,
    themeColorHover: EButtonThemeColor.BRAND,
    label: <ButtonLabel label={label} />,
    responsive,
    ...buttonProps
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
