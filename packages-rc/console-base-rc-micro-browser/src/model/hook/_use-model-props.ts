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

type TModelProps = RequiredSelected<IModelProps, 'visible' | 'minimizable'>;

export default function useModelProps(): TModelProps {
  const {
    props
  } = useModelContext();
   
  return useMemo((): TModelProps => {
    const {
      visible = true,
      minimizable = false // 暂时还不好用..
    } = props;
    
    return {
      visible,
      minimizable,
      ...props
    };
  }, [props]);
}
