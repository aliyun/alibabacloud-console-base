import {
  IModelPropsInProvider
} from '../types';

import useModelContext from './_use-model-context';

export default function useModelProps(): IModelPropsInProvider {
  return useModelContext().props;
}
