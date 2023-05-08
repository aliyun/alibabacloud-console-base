import {
  CSSProperties,
  useMemo
} from 'react';

import {
  ARROW_OFFSET,
  ARROW_TRIANGLE_BASE
} from '../../const';
import {
  ETooltipPlacement
} from '../enum';

import useModelProps from './_use-model-props';

export default function useTooltipArrowStyleOffset(): CSSProperties | undefined {
  const [{
    placement,
    arrowOffset = ARROW_OFFSET
  }] = useModelProps();
  
  return useMemo((): CSSProperties | undefined => {
    let realOffset = arrowOffset - ARROW_TRIANGLE_BASE * 0.2;
    
    if (realOffset < 2) { // 2 是一个奇怪的
      realOffset = 2;
    }
    
    switch (placement) {
      case ETooltipPlacement.TOP_LEFT:
      case ETooltipPlacement.BOTTOM_LEFT:
        return {
          left: realOffset
        };
      case ETooltipPlacement.TOP_RIGHT:
      case ETooltipPlacement.BOTTOM_RIGHT:
        return {
          right: realOffset
        };
      case ETooltipPlacement.LEFT_TOP:
      case ETooltipPlacement.RIGHT_TOP:
        return {
          top: realOffset
        };
      case ETooltipPlacement.LEFT_BOTTOM:
      case ETooltipPlacement.RIGHT_BOTTOM:
        return {
          bottom: realOffset
        };
      default:
        return undefined;
    }
  }, [placement, arrowOffset]);
}
