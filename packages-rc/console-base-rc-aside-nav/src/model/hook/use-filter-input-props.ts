import {
  SearchInputProps
} from '@alicloud/console-base-rc-input';

import useModelState from './_use-model-state';
import useHandleFilterKeydownForEsc from './use-handle-filter-keydown-for-esc';
import useHandleFilterFocusedChange from './use-handle-filter-focused-change';
import useHandleFilterValueChange from './use-handle-filter-value-change';

export default function useFilterInputProps(): SearchInputProps {
  const {
    filterValue,
    filterFocused
  } = useModelState();
  const handleFilterKeydownForEsc = useHandleFilterKeydownForEsc();
  const handleFilterFocusedChange = useHandleFilterFocusedChange();
  const handleFilterValueChange = useHandleFilterValueChange();
  
  return {
    block: true,
    focused: filterFocused,
    value: filterValue,
    onKeyDown: handleFilterKeydownForEsc,
    onFocusedChange: handleFilterFocusedChange,
    onChange: handleFilterValueChange
  };
}
