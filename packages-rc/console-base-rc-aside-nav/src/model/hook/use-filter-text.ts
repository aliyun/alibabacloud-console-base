import useModelState from './_use-model-state';

export default function useFilterText(): string {
  const {
    filterText
  } = useModelState();
  
  return filterText;
}