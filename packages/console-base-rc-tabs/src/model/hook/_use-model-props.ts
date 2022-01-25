import {
  useMemo
} from 'react';

import {
  RequiredSelected
} from '@alicloud/typescript-missing-helpers';

import {
  ETabsTheme
} from '../enum';
import {
  IModelProps
} from '../types';

import useModelContext from './_use-model-context';

interface ISafeProps extends RequiredSelected<IModelProps, 'theme' | 'width' | 'contentPadding'> {}

export default function useModelProps(): ISafeProps {
  const {
    props
  } = useModelContext();
  
  return useMemo((): ISafeProps => {
    const {
      theme = ETabsTheme.PLAIN,
      contentPadding = 'top',
      width = -1,
      ...rest
    } = props;
    
    const safeProps: ISafeProps = {
      theme,
      contentPadding,
      width,
      ...rest
    };
    
    if (!safeProps.tabs) {
      safeProps.tabs = [];
    }
    
    return safeProps;
  }, [props]);
}
