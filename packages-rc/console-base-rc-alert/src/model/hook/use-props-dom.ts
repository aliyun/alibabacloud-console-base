import {
  useMemo
} from 'react';

import {
  IPropsDom
} from '../types';

import useModelContext from './_use-model-context';

export default function usePropsDom(): IPropsDom {
  const {
    props
  } = useModelContext();
  
  return useMemo((): IPropsDom => {
    const {
      title,
      message,
      theme,
      toast,
      dense,
      visible,
      closable,
      autoClose,
      onVisibleChange,
      ...propsDom
    } = props;
    
    return propsDom;
  }, [props]);
}
