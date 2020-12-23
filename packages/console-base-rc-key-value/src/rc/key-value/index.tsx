import React from 'react';
import styled from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-theme';
import {
  typo
} from '@alicloud/console-base-styled-mixin';

import {
  IItem,
  IProps
} from '../../types';
import convertItems from '../../util/convert-items';

interface IPropsScItemV {
  wrapValue?: boolean;
}

const ScKeyValue = styled.div``;
const ScItem = styled.div`
  display: flex;
  margin: 4px 0;
  color: ${COLOR.TEXT_PRIMARY};
  color: var(--cb-color-text-primary, ${COLOR.TEXT_PRIMARY});
`;
const ScItemK = styled.div`
  margin-right: 1em;
  color: ${COLOR.TEXT_CAPTION};
  color: var(--cb-color-text-caption, ${COLOR.TEXT_CAPTION});
`;
const ScItemV = styled.div<IPropsScItemV>`
  flex: 1;
  ${props => (props.wrapValue ? typo.lineWrap : typo.ellipsis)};
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
  
  return <ScKeyValue {...props}>
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
  </ScKeyValue>;
}
