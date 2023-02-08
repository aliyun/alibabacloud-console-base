import {
  ISidePanelItemPropsWithKey
} from '../types';

import useModelProps from './_use-model-props';

export default function useItemsTop(): ISidePanelItemPropsWithKey[] {
  return useModelProps().itemsTop;
}