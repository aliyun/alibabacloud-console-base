import {
  Dispatch
} from 'react';

import {
  TAction
} from '../types';

import useModelContext from './_use-model-context';

export default function useModelDispatch(): Dispatch<TAction> {
  return useModelContext().dispatch;
}
