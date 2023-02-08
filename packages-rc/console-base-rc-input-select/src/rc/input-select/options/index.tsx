import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  mixinTextTertiary
} from '@alicloud/console-base-theme';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import {
  useDropdown
} from '@alicloud/console-base-rc-dropdown';

import {
  ISelectItem
} from '../../../types';
import intl from '../../../intl';

interface IProps<T> {
  dataSource: ISelectItem<T>[];
  value: T | undefined;
  onChange(value: T): void;
}

const ScNoOptions = styled.div`
  padding: 8px 12px;
  ${mixinTextTertiary}
`;

function getKeyFromValue(value: unknown): string | number | undefined {
  if (typeof value === 'string' || typeof value === 'number') {
    return value;
  }
  
  const str = String(value);
  
  if (str && str !== 'object Object]') {
    return str;
  }
}

function getKeyFromItem(item: ISelectItem<unknown>, index: number): string | number {
  return item.key ?? getKeyFromValue(item.value) ?? index;
}

export default function Options<T>({
  dataSource,
  value,
  onChange
}: IProps<T>): JSX.Element {
  const {
    hideDrop
  } = useDropdown();
  const handleClick = useCallback((valueNew: T) => {
    hideDrop();
    onChange(valueNew);
  }, [hideDrop, onChange]);
  
  return <div>
    {dataSource.length ? dataSource.map((v, i) => <Button {...{
      key: getKeyFromItem(v, i),
      theme: ButtonTheme.MENU,
      block: true,
      label: v.label,
      active: value === v.value,
      onClick: () => handleClick(v.value)
    }} />) : <ScNoOptions>{intl('phrase:no_options')}</ScNoOptions>}
  </div>;
}
