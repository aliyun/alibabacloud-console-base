import {
  useMemo
} from 'react';

import {
  RequiredSelected
} from '@alicloud/typescript-missing-helpers';

import {
  IModelProps
} from '../types';

import useModelContext from './_use-model-context';

type TModelProps = RequiredSelected<IModelProps, 'tools' | 'toolsSystem'>;

export default function useModelProps(): TModelProps {
  const {
    props
  } = useModelContext();
  
  return useMemo(() => {
    const {
      tools = [],
      toolsSystem = [],
      ...rest
    } = props;
    
    return {
      ...rest,
      tools,
      toolsSystem
    };
  }, [props]);
}
