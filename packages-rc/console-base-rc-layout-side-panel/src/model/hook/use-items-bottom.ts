import {
  ISidePanelItemPropsWithKey
} from '../types';

import useModelProps from './_use-model-props';

export default function useItemsBottom(): ISidePanelItemPropsWithKey[] {
  return useModelProps().itemsBottom;
}