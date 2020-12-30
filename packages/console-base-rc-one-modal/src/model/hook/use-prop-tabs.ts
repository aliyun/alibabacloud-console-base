import {
  IModalTab
} from '../../types';

import useModelProps from './_use-model-props';

export default function usePropTabs(): IModalTab[] {
  return useModelProps().tabs;
}
