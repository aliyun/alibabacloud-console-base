import useModelState from './_use-model-state';

export default function useFilterVisible(): boolean {
  return useModelState().filterVisible;
}
