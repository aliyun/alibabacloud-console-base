import {
  useMemo
} from 'react';

import {
  IPropsAttentionSeeker
} from '../../types';

import useModelContext from './_use-model-context';

const DEFAULT_PROPS: IPropsAttentionSeeker = {
  items: [],
  timestamp: 0
};

export default function useProps(): IPropsAttentionSeeker {
  const {
    props
  } = useModelContext();
  
  return useMemo(() => ({
    ...DEFAULT_PROPS,
    ...props
  }), [props]);
}
