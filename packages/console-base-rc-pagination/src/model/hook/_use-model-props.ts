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

interface IModelPropsSafe extends RequiredSelected<IModelProps, 'maxPageButton' | 'theme' | 'hideWhenOne'> {}

export default function useModelProps(): IModelPropsSafe {
  const {
    props
  } = useModelContext();
  
  return useMemo((): IModelPropsSafe => {
    const {
      maxPageButton = 5,
      theme = 'full',
      hideWhenOne = true,
      ...rest
    } = props;
    
    return {
      maxPageButton,
      theme,
      hideWhenOne,
      ...rest
    };
  }, [props]);
}
