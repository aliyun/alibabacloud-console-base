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

interface ISafeProps extends RequiredSelected<IModelProps, 'theme' | 'contentPadding'> {}

export default function useModelProps(): ISafeProps {
  const {
    props
  } = useModelContext();
  
  return useMemo((): ISafeProps => {
    const {
      theme = ETabsTheme.PLAIN,
      contentPadding = 'top',
      ...rest
    } = props;
    
    const safeProps: ISafeProps = {
      theme,
      contentPadding,
      ...rest
    };
    
    if (!safeProps.tabs) {
      safeProps.tabs = [];
    }
    
    return safeProps;
  }, [props]);
}
