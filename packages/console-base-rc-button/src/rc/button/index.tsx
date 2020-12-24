import React, {
  Ref,
  forwardRef
} from 'react';
import styled, {
  css
} from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-theme';
import {
  button,
  typo
} from '@alicloud/console-base-styled-mixin';
import Icon, {
  IconType
} from '@alicloud/console-base-rc-icon';

import {
  IButtonAppearanceAndTheme,
  IButtonProps,
  IPropsForSc
} from '../../types';
import {
  EButtonSize
} from '../../const';
import getSizes from '../../util/get-sizes';
import getFontSize from '../../util/get-font-size';
import getColor from '../../util/get-color';
import getColorBg from '../../util/get-color-bg';
import getColorBd from '../../util/get-color-bd';
import getPreset from '../../util/get-preset';

// 按钮通用样式，没有 Size 的时候不设边框
const cssCommon = css<IButtonAppearanceAndTheme>`
  display: inline-block;
  border: ${props => (props.size === EButtonSize.NONE ? 'none' : '1px solid transparent')};
  overflow: hidden;
  vertical-align: middle;
  text-align: ${props => props.textAlign || 'center'};
  color: ${COLOR.TEXT_SECONDARY};
  color: var(--cb-color-text-secondary, ${COLOR.TEXT_SECONDARY});
`;

const cssBlock = css`
  display: block;
  width: 100%;
`;

const cssEllipsis = css<IButtonAppearanceAndTheme>`
  ${props => (props.ellipsis ? typo.ellipsis : css`
    white-space: nowrap;
  `)};
`;

// 按钮大小 - 仅高度和 padding，不考虑文字
const cssSize = css<IButtonAppearanceAndTheme>`
  ${props => {
    const value = getSizes(props.size);
    
    if (value) {
      const [pd, h, lh] = value;
      
      return css`
        padding: 0 ${pd}px;
        height: ${h}px;
        line-height: ${lh}px;
      `;
    }
  }};
`;

const cssFontSize = css<IButtonAppearanceAndTheme>`
  ${props => {
    const value = getFontSize(props.fontSize);
    
    if (value > 0) {
      return css`
        font-size: ${value}px;
      `;
    }
  }};
`;

const cssColorBd = css<IButtonAppearanceAndTheme>`
  ${props => {
    const value = getColorBd(props.themeColorBd);
    
    return value ? css`
      border-color: ${value};
    ` : null;
  }};
`;

const cssColorBdHover = css<IButtonAppearanceAndTheme>`
  ${({
    disabled,
    themeColorBdHover
  }) => {
    if (disabled) {
      return;
    }
    
    const value = getColorBd(themeColorBdHover);
    
    return value ? css`
      &:hover {
        border-color: ${value};
      }
    ` : null;
  }};
`;

const cssColorBg = css<IButtonAppearanceAndTheme>`
  ${props => {
    const value = getColorBg(props.themeColorBg);
    
    return value ? css`
      background-color: ${value};
    ` : null;
  }};
`;

const cssColorBgHover = css<IButtonAppearanceAndTheme>`
  ${({
    disabled,
    themeColorBgHover
  }) => {
    if (disabled) {
      return;
    }
    
    const value = getColorBg(themeColorBgHover);
    
    return value ? css`
      &:hover {
        background-color: ${value};
      }
    ` : null;
  }};
`;

const cssColor = css<IButtonAppearanceAndTheme>`
  ${({
    disabled,
    themeColor
  }) => {
    if (disabled) {
      return;
    }
    
    const value = getColor(themeColor);
    
    return value ? css`
      &,
      &:link,
      &:visited,
      &:hover {
        color: ${value};
      }
    ` : null;
  }};
`;

const cssColorHover = css<IButtonAppearanceAndTheme>`
  ${props => {
    if (props.disabled) {
      return;
    }
    
    const value = getColor(props.themeColorHover);
    
    return value ? css`
      &:hover,
      &:link:hover,
      &:visited:hover {
        color: ${value};
      }
    ` : null;
  }};
`;

const ScButton = styled.span<IButtonAppearanceAndTheme>`
  ${button.reset};
  ${cssCommon};
  ${props => (props.block ? cssBlock : null)};
  ${cssEllipsis};
  ${cssSize};
  ${cssFontSize};
  ${cssColorBd};
  ${cssColorBdHover};
  ${cssColorBg};
  ${cssColorBgHover};
  ${cssColor};
  ${cssColorHover};
`;

// 当有 iconLeft iconRight loading 时对内容的包裹
const ScInner = styled.span`
  display: flex;
  align-items: center;
`;

const ScInnerIcon = styled.span`
  margin: 0 8px 0 4px;
  
  &:first-child {
    margin-left: 0;
  }
  
  &:last-child {
    margin-right: 0;
  }
`;

const ScInnerLabel = styled.span`
  flex: 1;
  ${typo.ellipsis};
`;

function getTarget(href: string, target?: string): string | undefined {
  if (target) {
    return target;
  }
  
  if (/^(?:https?:)?\/\//.test(href)) { // 且认为只要是绝对地址就应该是 _blank 一般不会有人傻到写自己站点的绝对地址
    return '_blank';
  }
}

function renderIcon(icon?: IconType | JSX.Element): JSX.Element | null {
  if (!icon) {
    return null;
  }
  
  if (React.isValidElement(icon)) {
    return icon;
  }
  
  return <Icon type={icon as IconType} />;
}

function Button({
  component = 'button',
  label,
  title,
  iconLeft,
  iconRight,
  children,
  href,
  target,
  spm,
  size = EButtonSize.M, // 默认有大小，可以通过设置 'none' 取消大小，取消大小之后就是 text button
  loading,
  disabled,
  preset,
  ...restProps
}: IButtonProps, ref: Ref<HTMLElement>): JSX.Element {
  const propsForSc: IPropsForSc = {
    size,
    disabled,
    ...getPreset(preset, disabled),
    ...restProps
  };
  const jsxIconLeft = loading ? <Icon type="loading" /> : renderIcon(iconLeft);
  const jsxIconRight = renderIcon(iconRight);
  let as = component;
  let jsxInner = label || children; // label prior to children
  
  // loading 的时候没有 hover 样式，cursor 在非 disabled 状态下为箭头
  if (loading) {
    delete propsForSc.themeColorBdHover;
    delete propsForSc.themeColorBgHover;
    delete propsForSc.themeColorHover;
    
    if (!disabled) {
      propsForSc.style = {
        ...propsForSc.style,
        cursor: 'default'
      };
    }
  }
  
  // loading 或 disabled 状态下对点击失效
  if (disabled || loading) {
    delete propsForSc.onClick;
  }
  
  if (title) {
    if (typeof title === 'string') {
      propsForSc.title = title;
    } else if (label && typeof label === 'string') { // title === true
      propsForSc.title = label;
    }
  }
  
  if (jsxIconLeft || jsxIconRight) {
    jsxInner = <ScInner>
      {jsxIconLeft ? <ScInnerIcon>{jsxIconLeft}</ScInnerIcon> : null}
      {jsxInner ? <ScInnerLabel>{jsxInner}</ScInnerLabel> : null}
      {jsxIconRight ? <ScInnerIcon>{jsxIconRight}</ScInnerIcon> : null}
    </ScInner>;
  }
  
  if (href && !disabled) {
    as = 'a'; // 保证有 href 且非 disabled 状态下一定是 a
    propsForSc.href = href;
    propsForSc.target = getTarget(href, target);
  }
  
  return <ScButton {...{
    ref,
    as,
    ...propsForSc,
    'data-spm-click': `gostr=/aliyun;locaid=d${spm}`
  }}>{jsxInner}</ScButton>;
}

export default forwardRef(Button);
