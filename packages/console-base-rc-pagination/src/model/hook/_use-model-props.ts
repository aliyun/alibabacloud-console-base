import {
  useMemo
} from 'react';

import {
  RequiredSelected
} from '@alicloud/typescript-missing-helpers';

import {
  IModelProps
} from '../types';

import useModelContext from './_use-model-context';

interface IModelPropsSafe extends RequiredSelected<IModelProps, 'limit' | 'theme' | 'hideWhenOne'> {}

export default function useModelProps(): IModelPropsSafe {
  const {
    props
  } = useModelContext();
  
  return useMemo((): IModelPropsSafe => {
    const {
      page, // 不要默认
      pageSize,
      total,
      limit = 5,
      theme = 'full',
      hideWhenOne = true,
      onChange,
      ...rest
    } = props;
    
    return {
      page,
      pageSize,
      total,
      limit,
      theme,
      hideWhenOne,
      ...rest
    };
  }, [props]);
}
