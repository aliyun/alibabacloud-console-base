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

type TModelProps = RequiredSelected<IModelProps, 'itemsTop' | 'itemsBottom'>;

export default function useModelProps(): TModelProps {
  const {
    props
  } = useModelContext();
  
  return useMemo(() => {
    const {
      itemsTop = [],
      itemsBottom = [],
      ...rest
    } = props;
    
    return {
      ...rest,
      itemsTop,
      itemsBottom
    };
  }, [props]);
}
