import {
  useMemo
} from 'react';

import {
  RequiredSelected
} from '@alicloud/typescript-missing-helpers';

import {
  ETabsVariant
} from '../enum';
import {
  IModelProps
} from '../types';

import useModelContext from './_use-model-context';

interface ISafeProps extends RequiredSelected<IModelProps, 'variant' | 'contentPadding'> {}

export default function useModelProps(): ISafeProps {
  const {
    props
  } = useModelContext();
  
  return useMemo((): ISafeProps => {
    const {
      variant = ETabsVariant.PLAIN,
      contentPadding = 'top',
      ...rest
    } = props;
    const safeProps: ISafeProps = {
      variant,
      contentPadding,
      ...rest
    };
    
    if (!safeProps.tabs) {
      safeProps.tabs = [];
    }
    
    return safeProps;
  }, [props]);
}
