import React from 'react';
import styled from 'styled-components';

import {
  mixinTextTertiary
} from '@alicloud/console-base-theme';

import {
  IErrorDetailKv
} from '../../../types';
import KvList from '../kv-list';

interface IProps {
  items: IErrorDetailKv[];
  folded: boolean;
}

interface IPropsScKvListFoldable {
  folded: boolean;
}

const ScKvListFoldable = styled.div<IPropsScKvListFoldable>`
  margin: 8px 0 0 0;
  max-height: ${props => (props.folded ? '0' : '400px')};
  overflow: auto;
  transition: all 200ms ease-out;
  ${mixinTextTertiary}
`;

export default function KvListFoldable({
  items,
  folded
}: IProps): JSX.Element | null {
  return <ScKvListFoldable folded={folded}>
    <KvList items={items} />
  </ScKvListFoldable>;
}
