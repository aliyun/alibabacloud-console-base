import {
  useMemo
} from 'react';

import {
  IPropsTabs
} from '../../types';

import useModelContext from './_use-model-context';

interface IModelProps extends IPropsTabs {
  width: number;
}

export default function useModelProps(): IModelProps {
  const {
    PROPS
  } = useModelContext();
  
  return useMemo((): IModelProps => ({
    width: -1,
    ...PROPS
  }), [PROPS]);
}
