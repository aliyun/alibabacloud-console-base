import {
  ISidePanelToolProps
} from '../types';

import useModelProps from './_use-model-props';

export default function useTools(): ISidePanelToolProps[] {
  return useModelProps().tools;
}