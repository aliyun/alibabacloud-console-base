import {
  useMemo
} from 'react';

import {
  IPropsRcTooltip
} from '../../types';

import useModelProps from './_use-model-props';

export default function useRcProps(): IPropsRcTooltip {
  const props = useModelProps();
  
  return useMemo(() => {
    const {
      trigger,
      triggerType,
      visible,
      onVisibleChange,
      ...rcProps
    } = props;
    
    return rcProps;
  }, [props]);
}