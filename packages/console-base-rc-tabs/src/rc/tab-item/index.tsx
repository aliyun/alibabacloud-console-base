import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinTypoEllipsis
} from '@alicloud/console-base-theme';
import {
  ButtonBase
} from '@alicloud/console-base-theme-sc-base';
import Icon from '@alicloud/console-base-rc-icon';

import {
  HEIGHT_TAB,
  BGC_TAB_DARK_ACTIVE,
  BGC_TAB_ACTIVE,
  BGC_TAB_IDLE,
  FGC_TAB_ACTIVE,
  FGC_TAB_IDLE,
  MAX_WIDTH_TAB,
  MIN_WIDTH_TAB,
  TAB_TOP_SPACE
} from '../../const';
import intl from '../../intl';
import ControlButton from '../../rc/control-button';

interface IScProps {
  'data-active'?: 1 | '';
  'data-closable'?: 1 | '';
}

const ScTabItem = styled.div<IScProps>`
  display: inline-block;
  position: relative;
  margin-top: ${TAB_TOP_SPACE}px;
  padding-top: 2px;
  max-width: 100%;
  line-height: ${HEIGHT_TAB}px;
  
  &:after {
    content: '';
    position: absolute;
    top: 30%;
    right: 1;
    opacity: ${props => (props['data-active'] ? 0 : 1)};
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.05) 100%);
    width: 1px;
    height: 40%;
    font-size: 16px;
    transition: all linear 200ms;
  }
  
  &:last-child {
    &:after {
      display: none;
    }
  }
`;

const ScTab = styled(ButtonBase)<IScProps>`
  padding: 0 ${props => (props['data-closable'] ? 28 : 8)}px 0 8px;
  border: 0;
  border-radius: 4px 4px 0 0;
  background-color: ${props => (props['data-active'] ? BGC_TAB_ACTIVE : BGC_TAB_IDLE)};
  min-width: ${MIN_WIDTH_TAB}px;
  max-width: ${MAX_WIDTH_TAB}px;
  height: ${HEIGHT_TAB}px;
  cursor: default;
  color: ${props => (props['data-active'] ? FGC_TAB_ACTIVE : FGC_TAB_IDLE)};
  ${mixinTypoEllipsis}
  
  .theme-dark && {
  ${props => (props['data-active'] ? css`
  background-color: ${BGC_TAB_DARK_ACTIVE};
  color: ${BGC_TAB_ACTIVE};
  ` : null)}
`;

const ScTabX = styled(ControlButton)`
  position: absolute;
  top: 8px;
  right: 6px;
`;

interface IProps {
  title: string | JSX.Element;
  className?: string;
  active?: boolean;
  onClick?(): void;
  onClose?(): void;
}

export default function TabItem({
  title,
  className,
  active,
  onClick,
  onClose
}: IProps): JSX.Element {
  return <ScTabItem {...{
    className,
    'data-active': active ? 1 : ''
  }}>
    <ScTab {...{
      'data-closable': onClose ? 1 : '',
      'data-active': active ? 1 : '',
      title: typeof title === 'string' ? title : undefined,
      onClick
    }}>{title}</ScTab>
    {onClose ? <ScTabX {...{
      spm: 'x',
      title: intl('op:close'),
      light: !active,
      label: <Icon type="x" />,
      onClick: onClose
    }} /> : null}
  </ScTabItem>;
}
