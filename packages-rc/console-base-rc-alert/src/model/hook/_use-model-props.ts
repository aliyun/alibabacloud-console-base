import {
  useMemo
} from 'react';

import {
  RequiredSelected
} from '@alicloud/typescript-missing-helpers';

import {
  EAlertTheme
} from '../enum';
import {
  IModelProps
} from '../types';

import useModelContext from './_use-model-context';

interface IPropsSafe extends RequiredSelected<IModelProps, 'theme' | 'autoClose'> {
  autoClose: number;
}

export default function useModelProps(): IPropsSafe {
  const {
    props
  } = useModelContext();
  
  return useMemo(() => {
    const {
      theme = EAlertTheme.HELP,
      autoClose,
      ...rest
    } = props;
    let autoCloseSeconds = 0;
    
    if (autoClose === true) {
      autoCloseSeconds = 3;
    } else if (autoClose) {
      const n = Math.round(autoClose);
      
      if (n > 0) {
        autoCloseSeconds = n; // 保证正整数
      }
    }
    
    return {
      theme,
      autoClose: autoCloseSeconds,
      ...rest
    };
  }, [props]);
}
