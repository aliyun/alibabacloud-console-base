import {
  IPropsCustom
} from '../types';

import useModelProps from './_use-model-props';

export default function usePropsCustom(): IPropsCustom {
  return useModelProps()[0];
}
