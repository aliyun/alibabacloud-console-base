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

interface IModelPropsSafe extends RequiredSelected<IModelProps, 'theme' | 'hideWhenOne' | 'maxPageButton'> {}

export default function useModelProps(): IModelPropsSafe {
  const {
    props
  } = useModelContext();
  
  return useMemo((): IModelPropsSafe => {
    const {
      theme = 'full',
      hideWhenOne = true,
      maxPageButton = 5,
      ...rest
    } = props;
    
    return {
      theme,
      hideWhenOne,
      maxPageButton,
      ...rest
    };
  }, [props]);
}
