import {
  IContextProps
} from '../types';

import useModelContext from './_use-model-context';

export default function useModelProps(): IContextProps {
  return useModelContext().PROPS;
}
