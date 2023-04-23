import React from 'react';

import {
  SearchInput
} from '@alicloud/console-base-rc-input';

import intl from '../../../intl';
import {
  useFilterInputProps
} from '../../../../model';

export default function FilterInput(): JSX.Element {
  const filterInputProps = useFilterInputProps();
  
  return <SearchInput {...{
    ...filterInputProps,
    placeholder: intl('ph:esc_to_cancel')
  }} />;
}
