import useModelState from './_use-model-state';

export default function useFiltering(): boolean {
  const {
    filtering
  } = useModelState();
  
  return filtering;
}