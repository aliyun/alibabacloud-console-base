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
  IPropsCustom,
  IPropsDom
} from '../types';

import useModelContext from './_use-model-context';

interface IPropsCustomSafe extends RequiredSelected<IPropsCustom, 'theme' | 'autoClose'> {
  autoClose: number;
}

export default function useProps(): [IPropsCustomSafe, IPropsDom] {
  const {
    props
  } = useModelContext();
  
  return useMemo((): [IPropsCustomSafe, IPropsDom] => {
    const {
      title,
      message,
      theme = EAlertTheme.HELP,
      visible,
      toast,
      closable,
      autoClose,
      onVisibleChange,
      ...propsDom
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
    
    return [{
      title,
      message,
      theme,
      visible,
      toast,
      closable,
      autoClose: autoCloseSeconds,
      onVisibleChange
    }, propsDom];
  }, [props]);
}
