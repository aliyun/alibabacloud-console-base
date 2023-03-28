import {
  IModelProps
} from '../types';

import useModelContext from './_use-model-context';

export default function useModelProps(): IModelProps {
  return useModelContext().props;
}
