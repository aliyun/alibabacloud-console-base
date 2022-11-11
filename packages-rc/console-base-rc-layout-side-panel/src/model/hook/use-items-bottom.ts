import {
  ISidePanelItemProps
} from '../types';

import useModelProps from './_use-model-props';

export default function useItemsBottom(): ISidePanelItemProps[] {
  return useModelProps().itemsBottom;
}