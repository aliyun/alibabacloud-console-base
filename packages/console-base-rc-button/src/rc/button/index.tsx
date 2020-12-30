import React, {
  Ref,
  forwardRef
} from 'react';
import styled from 'styled-components';

import {
  mixinButtonReset,
  typo
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';

import {
  IButtonProps,
  IButtonPropsForSc
} from '../../types';
import {
  EButtonSize,
  EButtonTheme
} from '../../const';
import mixinCommon from '../../mixin/common';
import mixinBorder from '../../mixin/border';
import mixinTextAlign from '../../mixin/text-align';
import mixinBlock from '../../mixin/block';
import mixinEllipsis from '../../mixin/ellipsis';
import mixinSize from '../../mixin/size';
import mixinTheme from '../../mixin/theme';
import mixinShadow from '../../mixin/shadow';
import mixinCursor from '../../mixin/cursor';
import getHrefTarget from '../../util/get-href-target';
import getTitle from '../../util/get-title';
import renderIcon from '../../util/render-icon';

const ScButton = styled.span<IButtonPropsForSc>`
  ${mixinButtonReset}
  ${mixinCommon}
  ${mixinBorder}
  ${mixinTextAlign}
  ${mixinBlock}
  ${mixinEllipsis}
  ${mixinSize}
  ${mixinTheme}
  ${mixinShadow}
  ${mixinCursor}
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

function getSize(theme: EButtonTheme, size: EButtonSize): EButtonSize {
  switch (theme) {
    case EButtonTheme.TEXT_PRIMARY:
    case EButtonTheme.TEXT_SECONDARY:
    case EButtonTheme.TEXT_TERTIARY:
    case EButtonTheme.TEXT_BRAND_PRIMARY:
    case EButtonTheme.TEXT_BRAND_SECONDARY:
      return EButtonSize.NONE;
    default:
      return size;
  }
}

function Button({
  theme = EButtonTheme.TERTIARY,
  size = EButtonSize.M, // 默认有大小，可以通过设置 'none' 取消大小，取消大小之后就是 text button
  label,
  title,
  iconLeft,
  iconRight,
  children,
  loading,
  disabled,
  borderRadius = true,
  spm = 'button',
  component = 'button',
  ...restProps
}: IButtonProps, ref: Ref<HTMLElement>): JSX.Element {
  const propsForSc: IButtonPropsForSc = {
    size: getSize(theme, size),
    theme,
    disabled,
    loading,
    borderRadius,
    title: getTitle(title, label),
    ...restProps
  };
  const jsxIconLeft = loading ? <Icon type="loading" /> : renderIcon(iconLeft);
  const jsxIconRight = renderIcon(iconRight);
  let as = component;
  let jsxInner = label || children; // label prior to children
  
  if (jsxIconLeft || jsxIconRight) {
    jsxInner = <ScInner>
      {jsxIconLeft ? <ScInnerIcon>{jsxIconLeft}</ScInnerIcon> : null}
      {jsxInner ? <ScInnerLabel>{jsxInner}</ScInnerLabel> : null}
      {jsxIconRight ? <ScInnerIcon>{jsxIconRight}</ScInnerIcon> : null}
    </ScInner>;
  }
  
  // loading 或 disabled 状态下不能有点击和链接
  if (disabled || loading) {
    delete propsForSc.onClick;
    delete propsForSc.href;
    delete propsForSc.target;
  }
  
  if (propsForSc.href) { // 保证有 href 且非 disabled 状态下一定是 a，以及外链默认 target blank
    as = 'a';
    propsForSc.target = getHrefTarget(propsForSc.href, propsForSc.target);
  }
  
  return <ScButton {...{
    ref,
    as,
    ...propsForSc,
    'data-spm-click': `gostr=/aliyun;locaid=d${spm}`
  }}>{jsxInner}</ScButton>;
}

export default forwardRef(Button);
