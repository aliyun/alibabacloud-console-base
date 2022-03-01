import React, {
  Ref,
  forwardRef
} from 'react';
import styled from 'styled-components';

import {
  ButtonBase
} from '@alicloud/console-base-theme-sc-base';
import {
  mixinTypoEllipsis
} from '@alicloud/console-base-theme';

import {
  IModelProps,
  usePropsCustom,
  usePropsDom
} from '../../model';
import {
  isBlock,
  isBorderless,
  getStyleTextAlign,
  getMixinTheme,
  getMixinSize,
  getMixinShadow
} from '../../util';
import ButtonIconLeft from '../button-icon-left';
import ButtonIconRight from '../button-icon-right';

// 当有 iconLeft iconRight loading 时对内容的包裹
const ScInner = styled.span`
  display: flex;
  align-items: center;
`;

const ScInnerLabel = styled.span`
  flex: 1;
  ${mixinTypoEllipsis}
`;

function getStyleBorderRadius(props: Partial<IModelProps>): string {
  if (isBorderless(props) || !props.borderRadius) {
    return '0';
  }
  
  return props.borderRadius === 'full' ? '100px' : '2px';
}

function getStyleCursor(props: Partial<IModelProps>): string {
  if (props.disabled) {
    return 'not-allowed';
  }
  
  if (props.loading) {
    return 'default';
  }
  
  return props.cursor || 'pointer';
}

const ScButton = styled(ButtonBase)<Partial<IModelProps>>`
  display: ${props => (isBlock(props) ? 'block' : 'inline-block')};
  border: ${props => (isBorderless(props) ? 'none' : '1px solid transparent')};
  border-radius: ${getStyleBorderRadius};
  width: ${props => (isBlock(props) ? '100%' : 'auto')};
  max-width: 100%;
  overflow: hidden;
  cursor: ${getStyleCursor};
  vertical-align: middle;
  text-align: ${getStyleTextAlign};
  ${mixinTypoEllipsis}
  ${getMixinTheme}
  ${getMixinSize}
  ${getMixinShadow}
`;

function Ui(_props: unknown, ref: Ref<HTMLDivElement>): JSX.Element {
  const {
    label,
    iconLeft,
    iconRight,
    loading,
    component,
    theme,
    size,
    noShadow,
    textAlign,
    cursor,
    borderRadius,
    block,
    active
  } = usePropsCustom();
  const {
    children,
    ...propsDom
  } = usePropsDom();
  const jsxLabel = label || children; // label prior to children
  
  return <ScButton {...{
    ref,
    as: component,
    theme,
    size,
    loading: (loading ? 1 : 0) as unknown as boolean, // 否则报错
    noShadow,
    textAlign,
    cursor,
    borderRadius,
    block,
    active,
    ...propsDom
  }}>
    {iconLeft || iconRight || loading ? <ScInner>
      <ButtonIconLeft />
      {jsxLabel ? <ScInnerLabel>{jsxLabel}</ScInnerLabel> : null}
      <ButtonIconRight />
    </ScInner> : jsxLabel}
  </ScButton>;
}

export default forwardRef(Ui);
