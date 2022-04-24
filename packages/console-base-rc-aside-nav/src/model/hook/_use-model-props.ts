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

type TModelProps = RequiredSelected<IModelProps, 'subItemsUnfolded'>;

export default function useModelProps(): TModelProps {
  const {
    props
  } = useModelContext();
  
  return useMemo(() => {
    const {
      subItemsUnfolded = true,
      ...rest
    } = props;
    
    return {
      subItemsUnfolded,
      ...rest
    };
  }, [props]);
}
