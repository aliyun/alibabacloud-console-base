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

type TModelProps = RequiredSelected<IModelProps, 'unfoldedAll' | 'unfoldedFirst'>;

export default function useModelProps(): TModelProps {
  const {
    props
  } = useModelContext();
  
  return useMemo(() => {
    const {
      unfoldedAll = true,
      unfoldedFirst = true,
      ...rest
    } = props;
    
    return {
      unfoldedAll,
      unfoldedFirst,
      ...rest
    };
  }, [props]);
}
