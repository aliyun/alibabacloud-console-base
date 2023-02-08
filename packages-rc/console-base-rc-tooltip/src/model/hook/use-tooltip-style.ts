import {
  CSSProperties,
  useMemo
} from 'react';

import useModelProps from './_use-model-props';
import useTooltipStyleMargin from './use-tooltip-style-margin';
import useTooltipStylePadding from './use-tooltip-style-padding';

export default function useTooltipStyle(): CSSProperties {
  const [, {
    style
  }] = useModelProps();
  const tooltipStyleMargin = useTooltipStyleMargin();
  const tooltipStylePadding = useTooltipStylePadding();
  
  return useMemo((): CSSProperties => {
    return {
      ...style,
      ...tooltipStyleMargin,
      ...tooltipStylePadding
    };
  }, [style, tooltipStyleMargin, tooltipStylePadding]);
}
