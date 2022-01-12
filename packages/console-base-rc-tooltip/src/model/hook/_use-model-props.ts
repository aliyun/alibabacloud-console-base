import {
  useMemo
} from 'react';

import {
  ETooltipPlacement,
  ETooltipTheme,
  IModelPropsSafe
} from '../types';

import useModelContext from './_use-model-context';

export default function useModelProps(): IModelPropsSafe {
  const {
    props
  } = useModelContext();
  
  return useMemo((): IModelPropsSafe => {
    const {
      theme = ETooltipTheme.NORMAL,
      placement = ETooltipPlacement.TOP,
      arrow = true,
      autoClose = 0,
      ...rest
    } = props;
    let autoCloseSeconds = 0;
    
    if (autoClose === true) {
      autoCloseSeconds = 5;
    } else if (autoClose) {
      const n = Math.round(autoClose);
      
      if (n > 0) {
        autoCloseSeconds = n; // 保证正整数
      }
    }
    
    return {
      theme,
      placement,
      arrow,
      ...rest,
      autoClose: autoCloseSeconds
    };
  }, [props]);
}
