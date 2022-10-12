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

type TModelProps = RequiredSelected<IModelProps, 'fixed' | 'menus'>;

export default function useModelProps(): TModelProps {
  const {
    props
  } = useModelContext();
  
  return useMemo(() => {
    const {
      menus = [],
      fixed = true,
      account,
      ...rest
    } = props;
    
    return {
      menus,
      fixed,
      account,
      ...rest
    };
  }, [props]);
}
