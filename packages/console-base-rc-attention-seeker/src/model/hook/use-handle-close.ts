import {
  useCallback
} from 'react';

import {
  TCloseSource
} from '../types';

import useModelProps from './_use-model-props';

export default function useHandleClose(): (source: TCloseSource) => void {
  const {
    onClose
  } = useModelProps();
  
  return useCallback((source: TCloseSource) => {
    onClose?.(source);
  }, [onClose]);
}
