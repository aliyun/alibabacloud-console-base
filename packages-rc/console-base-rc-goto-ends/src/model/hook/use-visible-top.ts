import useModelState from './_use-model-state';

export default function useVisibleTop(): boolean {
  return useModelState().visibleTop;
}