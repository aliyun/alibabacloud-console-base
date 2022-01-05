import {
  useMemo
} from 'react';

import {
  RequiredSelected
} from '@alicloud/typescript-missing-helpers';

import {
  IPropsTopNav
} from '../types';

import useModelContext from './_use-model-context';

type TModelProps = RequiredSelected<IPropsTopNav, 'fixed' | 'menus' | 'account'>;

export default function useModelProps(): TModelProps {
  const {
    props
  } = useModelContext();
  
  return useMemo(() => ({
    menus: [],
    fixed: true,
    account: {},
    ...props
  }), [props]);
}
