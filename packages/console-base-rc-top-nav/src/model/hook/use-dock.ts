import {
  ITopNavDock
} from '../../types';
import hasNoActionPoint from '../../util/has-no-action-point';

import useModelProps from './_use-model-props';

export default function useDock(): ITopNavDock | null {
  const {
    dock
  } = useModelProps();
  
  return hasNoActionPoint(dock) ? null : dock;
}
