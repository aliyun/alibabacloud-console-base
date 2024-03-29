import {
  useMemo
} from 'react';

import {
  IModelProps
} from '../types';

import useModelContext from './_use-model-context';

const DEFAULT_PROPS: IModelProps = {
  items: []
};

export default function useModelProps(): IModelProps {
  const {
    props
  } = useModelContext();
  
  return useMemo(() => ({
    ...DEFAULT_PROPS,
    ...props
  }), [props]);
}
