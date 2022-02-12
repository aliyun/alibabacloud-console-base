import React from 'react';
import styled from 'styled-components';

import {
  ButtonBase
} from '@alicloud/console-base-theme-sc-base';

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
import ButtonIcon from '../button-icon';
import ButtonLabel from '../button-label';

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
  display: ${props => (isBlock(props) ? 'flex' : 'inline-flex')};
  border: ${props => (isBorderless(props) ? 'none' : '1px solid transparent')};
  border-radius: ${getStyleBorderRadius};
  width: ${props => (isBlock(props) ? '100%' : 'auto')};
  overflow: hidden;
  cursor: ${getStyleCursor};
  vertical-align: middle;
  text-align: ${getStyleTextAlign};
  ${getMixinTheme}
  ${getMixinSize}
  ${getMixinShadow}
`;

export default function Ui(): JSX.Element {
  const {
    component,
    loading,
    theme,
    size,
    noShadow,
    textAlign,
    cursor,
    borderRadius,
    block,
    active
  } = usePropsCustom();
  const propsDom = usePropsDom();
  
  return <ScButton {...{
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
    <ButtonIcon left />
    <ButtonLabel />
    <ButtonIcon />
  </ScButton>;
}
