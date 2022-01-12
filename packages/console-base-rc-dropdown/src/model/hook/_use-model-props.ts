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

type TModelProps = RequiredSelected<IModelProps, 'dropContainer' | 'zIndex' | 'offset'>;

export default function useProps(): TModelProps {
  const {
    props
  } = useModelContext();
  
  return useMemo((): TModelProps => ({
    dropContainer: 'inside',
    zIndex: 10,
    offset: [0, 0],
    ...props
  }), [props]);
}
