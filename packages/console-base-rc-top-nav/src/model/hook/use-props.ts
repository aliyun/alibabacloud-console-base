import {
  IPropsTopNav
} from '../../types';

import useModelContext from './_use-model-context';

export default function useProps(): IPropsTopNav {
  return useModelContext().props;
}
