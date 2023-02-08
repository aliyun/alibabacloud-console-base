import {
  CSSProperties,
  useMemo
} from 'react';

import {
  SPACING_WITH_ARROW,
  SPACING_WITHOUT_ARROW
} from '../../const';
import {
  ETooltipPlacement
} from '../enum';

import useModelProps from './_use-model-props';

export default function useTooltipStyleMargin(): CSSProperties | undefined {
  const [{
    placement,
    arrow
  }] = useModelProps();
  
  return useMemo((): CSSProperties | undefined => {
    const spacing = arrow ? SPACING_WITH_ARROW : SPACING_WITHOUT_ARROW;
  
    switch (placement) {
      case ETooltipPlacement.TOP:
      case ETooltipPlacement.TOP_LEFT:
      case ETooltipPlacement.TOP_RIGHT:
        return {
          marginBottom: spacing
        };
      case ETooltipPlacement.BOTTOM:
      case ETooltipPlacement.BOTTOM_LEFT:
      case ETooltipPlacement.BOTTOM_RIGHT:
        return {
          marginTop: spacing
        };
      case ETooltipPlacement.LEFT:
      case ETooltipPlacement.LEFT_TOP:
      case ETooltipPlacement.LEFT_BOTTOM:
        return {
          marginRight: spacing
        };
      case ETooltipPlacement.RIGHT:
      case ETooltipPlacement.RIGHT_TOP:
      case ETooltipPlacement.RIGHT_BOTTOM:
        return {
          marginLeft: spacing
        };
      default:
        return undefined;
    }
  }, [placement, arrow]);
}
