import {
  useMemo
} from 'react';

import {
  IPropsOnDom
} from '../types';

import useModelContext from './_use-model-context';

export default function usePropsOnDom(): IPropsOnDom {
  const {
    props
  } = useModelContext();
  
  return useMemo((): IPropsOnDom => {
    const {
      total,
      page,
      pageSize,
      align,
      theme,
      limit,
      hideWhenOne,
      onChange,
      ...rest
    } = props;
    
    return rest;
  }, [props]);
}
