import {
  ITopNavLogo
} from '../../types';

import useModelProps from './_use-model-props';

export default function useDock(): ITopNavLogo | undefined {
  return useModelProps().logo;
}
