import React from 'react';
import styled from 'styled-components';

import {
  mixinTextPrimary,
  mixinTextTertiary,
  mixinTypoEllipsis,
  mixinTypoLineWrap
} from '@alicloud/console-base-theme';

import {
  IItem,
  IProps
} from '../../types';
import convertItems from '../../util/convert-items';

interface IPropsScItemV {
  wrapValue?: boolean;
}

const ScItem = styled.div`
  display: flex;
  margin: 4px 0;
  ${mixinTextPrimary}
`;
const ScItemK = styled.div`
  margin-right: 1em;
  ${mixinTextTertiary}
`;
const ScItemV = styled.div<IPropsScItemV>`
  flex: 1;
  ${props => (props.wrapValue ? mixinTypoLineWrap : mixinTypoEllipsis)}
`;

/**
 * 功能简单的 key-value 对展示
 */
export default function KeyValue({
  o,
  ignoreEmpty,
  wrapValue,
  ...props
}: IProps): JSX.Element | null {
  const arr: IItem[] = convertItems(o, ignoreEmpty);
  
  if (!arr.length) {
    return null;
  }
  
  return <div {...props}>
    {arr.map(({
      key,
      k,
      v
    }, i) => <ScItem {...{
      key: key || i
    }}>
      <ScItemK>{k}</ScItemK>
      <ScItemV wrapValue={wrapValue}>{v}</ScItemV>
    </ScItem>)}
  </div>;
}
