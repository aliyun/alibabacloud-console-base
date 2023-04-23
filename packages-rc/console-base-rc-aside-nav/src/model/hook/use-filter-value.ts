import useModelState from './_use-model-state';

export default function useFilterValue(): string {
  return useModelState().filterValue;
}
