import {
  CSSProperties,
  useMemo
} from 'react';

import {
  RequiredSelected
} from '@alicloud/typescript-missing-helpers';

import {
  ACTION_OFFSET_FROM_RIGHT,
  ACTION_SIZE
} from '../../const';
import {
  ETooltipPlacement,
  ETooltipTheme
} from '../enum';
import {
  IPropsCustom,
  IPropsDom
} from '../types';

import useModelContext from './_use-model-context';

interface IModelPropsSafe extends RequiredSelected<Omit<IPropsCustom, 'autoClose'>, 'placement' | 'theme' | 'arrow' | 'defaultVisible' | 'autoCloseKey' | 'autoCloseCounter'> {
  autoClose: number;
}

export default function useModelProps(): [IModelPropsSafe, IPropsDom] {
  const {
    props
  } = useModelContext();
  
  return useMemo((): [IModelPropsSafe, IPropsDom] => {
    const {
      title,
      content,
      theme = ETooltipTheme.NORMAL,
      placement = ETooltipPlacement.TOP,
      arrow = true,
      visible,
      defaultVisible = false,
      closable,
      autoClose = 0,
      autoCloseKey = '',
      autoCloseCounter = true,
      onConfig,
      onClose,
      ...propsDom
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
  
    const finalStyle: CSSProperties = {
      ...propsDom.style
    };
  
    if (closable || onConfig) {
      const n = closable && onConfig ? 2 : 1;
      
      finalStyle.paddingRight = ACTION_OFFSET_FROM_RIGHT * 2 + ACTION_SIZE * n;
    }
    
    propsDom.style = finalStyle;
    
    return [{
      title,
      content,
      theme,
      placement,
      arrow,
      visible,
      defaultVisible,
      closable,
      autoClose: autoCloseSeconds,
      autoCloseKey,
      autoCloseCounter,
      onConfig,
      onClose
    }, propsDom];
  }, [props]);
}
