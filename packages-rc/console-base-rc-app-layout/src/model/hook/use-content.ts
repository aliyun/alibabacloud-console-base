import {
  ReactNode
} from 'react';

import useModelProps from './_use-model-props';

export default function useContent(): ReactNode {
  return useModelProps().children;
}
