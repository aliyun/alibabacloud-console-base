import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import usePage from './use-page';
import usePages from './use-pages';
import useDispatchSetPage from './use-dispatch-set-page';

function getPageNew(value: number | '+1' | '-1', page: number, pages: number): number {
  let pageNew: number;
  
  if (value === '+1') {
    pageNew = page + 1;
  } else if (value === '-1') {
    pageNew = page - 1;
  } else {
    pageNew = value;
  }
  
  if (pageNew < 1) {
    return 1;
  }
  
  if (pageNew > pages) {
    return pages;
  }
  
  return pageNew;
}

export default function useHandlePage(): (value: number | '+1' | '-1') => void {
  const {
    onChange
  } = useModelProps();
  const page = usePage();
  const pages = usePages();
  const dispatchSetPage = useDispatchSetPage();
  
  return useCallback((value: number | '+1' | '-1') => {
    const pageNew = getPageNew(value, page, pages);
    
    if (pageNew === page) {
      return;
    }
    
    dispatchSetPage(pageNew);
    
    if (onChange) {
      onChange(pageNew);
    }
  }, [page, pages, onChange, dispatchSetPage]);
}
