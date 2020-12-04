import {
  ReactNode
} from 'react';

import useModelProps from './_use-model-props';

export default function usePropCustomLeft(): ReactNode {
  return useModelProps().customLeft;
}
