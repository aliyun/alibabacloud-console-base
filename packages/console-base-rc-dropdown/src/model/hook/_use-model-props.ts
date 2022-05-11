import {
  useMemo
} from 'react';

import {
  RequiredSelected
} from '@alicloud/typescript-missing-helpers';
import {
  Z_INDEX
} from '@alicloud/console-base-theme';

import {
  IModelProps
} from '../types';

import useModelContext from './_use-model-context';

type TModelProps = RequiredSelected<IModelProps, 'dropContainer' | 'zIndex' | 'offset'>;

export default function useProps(): TModelProps {
  const {
    props
  } = useModelContext();
  
  return useMemo((): TModelProps => {
    const {
      dropContainer = 'inside',
      zIndex = Z_INDEX.POPUP,
      offset = [0, 0],
      bodyPadding = 'both',
      ...rest
    } = props;
    
    return {
      dropContainer,
      zIndex,
      offset,
      bodyPadding,
      ...rest
    };
  }, [props]);
}
