import {
  IAttentionSeekerRect
} from '../types';

import useModelState from './_use-model-state';

export default function useRect(): IAttentionSeekerRect {
  return useModelState().rectStyle;
}
