import {
  ISidePanelToolProps
} from '../types';

import useModelProps from './_use-model-props';

export default function useToolsSystem(): ISidePanelToolProps[] {
  return useModelProps().toolsSystem;
}