import {
  CSSProperties,
  useMemo
} from 'react';

import {
  ACTION_OFFSET_FROM_RIGHT,
  ACTION_SIZE
} from '../../const';

import useModelProps from './_use-model-props';

export default function useTooltipStylePadding(): CSSProperties | undefined {
  const [{
    closable,
    onConfig
  }] = useModelProps();
  
  return useMemo((): CSSProperties | undefined => {
    if (closable || onConfig) {
      const n = closable && onConfig ? 2 : 1;
      
      return {
        paddingRight: ACTION_OFFSET_FROM_RIGHT * 2 + ACTION_SIZE * n
      };
    }
  }, [closable, onConfig]);
}
