import {
  useMemo
} from 'react';

import {
  RequiredSelected
} from '@alicloud/typescript-missing-helpers';

import {
  IPropsTabs
} from '../../types';

import useModelContext from './_use-model-context';

type TModelProps = RequiredSelected<IPropsTabs, 'width' | 'contentPadding'>;

const DEFAULT_PROPS: TModelProps = {
  tabs: [],
  contentPadding: 'top',
  width: -1
};

export default function useModelProps(): TModelProps {
  const {
    props
  } = useModelContext();
  
  return useMemo((): TModelProps => ({
    ...DEFAULT_PROPS,
    ...props
  }), [props]);
}
