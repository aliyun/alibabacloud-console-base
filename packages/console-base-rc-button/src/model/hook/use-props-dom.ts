import {
  IPropsDom
} from '../types';

import useModelProps from './_use-model-props';

export default function usePropsDom(): IPropsDom {
  return useModelProps()[1];
}
