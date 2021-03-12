import {
  IPropsDropdown
} from '../../types';

import useModelContext from './_use-model-context';

export default function useProps(): IPropsDropdown {
  return useModelContext().props;
}
