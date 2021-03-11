import {
  IPropsModal
} from '../../types';

import useModelContext from './_use-model-context';

export default function useModelProps(): IPropsModal {
  return useModelContext().PROPS;
}
