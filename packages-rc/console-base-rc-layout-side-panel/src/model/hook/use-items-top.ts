import {
  ISidePanelItemProps
} from '../types';

import useModelProps from './_use-model-props';

export default function useItemsTop(): ISidePanelItemProps[] {
  return useModelProps().itemsTop;
}