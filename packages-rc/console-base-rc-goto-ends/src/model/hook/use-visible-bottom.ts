import useModelState from './_use-model-state';

export default function useVisibleBottom(): boolean {
  return useModelState().visibleBottom;
}