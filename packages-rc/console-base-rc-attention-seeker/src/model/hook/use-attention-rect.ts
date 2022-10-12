import {
  IAttentionRect
} from '../types';

import useModelState from './_use-model-state';

export default function useAttentionRect(): IAttentionRect {
  return useModelState().attentionRect;
}
