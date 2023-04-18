import React from 'react';

import {
  SearchInput
} from '@alicloud/console-base-rc-input';

import intl from '../../../intl';
import {
  useFilterValue,
  useHandleFilterValueChange,
  useHandleFilterKeydownForEsc
} from '../../../../model';

export default function FilterInput(): JSX.Element {
  const filterValue = useFilterValue();
  const handleFilterValueChange = useHandleFilterValueChange();
  const handleFilterKeydownForEsc = useHandleFilterKeydownForEsc();
  
  return <SearchInput {...{
    block: true,
    value: filterValue,
    placeholder: intl('ph:esc_to_cancel'),
    onKeyDown: handleFilterKeydownForEsc,
    onChange: handleFilterValueChange
  }} />;
}
