import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinTextPrimary,
  mixinTextTertiary,
  mixinTypoEllipsis,
  mixinTypoLineWrap
} from '@alicloud/console-base-theme';

import {
  IItemResolved,
  IKeyValueProps
} from '../../types';
import {
  convertItems
} from '../../util';

interface IPropsScKeyValue {
  horizontal?: boolean;
}

interface IPropsScKeyValueItemV {
  wrapValue?: boolean;
}

const ScKeyValue = styled.div<IPropsScKeyValue>`
  ${props => (props.horizontal ? css`
    display: flex;
    align-items: center;
  ` : null)};
`;
const ScKeyValueItem = styled.div<IPropsScKeyValue>`
  display: flex;
  margin: 4px ${props => (props.horizontal ? 16 : 0)}px 4px 0;
  ${mixinTextPrimary}
  
  &:last-child {
    margin-right: 0;
  }
`;
const ScKeyValueItemK = styled.div`
  margin-right: 8px;
  ${mixinTextTertiary}
`;
const ScKeyValueItemV = styled.div<IPropsScKeyValueItemV>`
  flex: 1;
  ${props => (props.wrapValue ? mixinTypoLineWrap : mixinTypoEllipsis)}
`;

/**
 * 功能简单的 key-value 对展示
 */
export default function KeyValue({
  o,
  classNameForItem = 'the-kv',
  classNameForKey = 'the-kv-key',
  classNameForValue = 'the-kv-value',
  horizontal,
  ignoreEmpty,
  wrapValue,
  ...props
}: IKeyValueProps): JSX.Element | null {
  const items: IItemResolved[] = convertItems(o, ignoreEmpty);
  
  if (!items.length) {
    return null;
  }
  
  return <ScKeyValue horizontal={horizontal} {...props}>
    {items.map(({
      key,
      k,
      v
    }, i) => <ScKeyValueItem {...{
      key: key || i,
      className: classNameForItem,
      horizontal
    }}>
      <ScKeyValueItemK className={classNameForKey}>{k}</ScKeyValueItemK>
      <ScKeyValueItemV className={classNameForValue} wrapValue={wrapValue}>{v}</ScKeyValueItemV>
    </ScKeyValueItem>)}
  </ScKeyValue>;
}
