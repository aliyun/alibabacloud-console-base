import useModelContext from './_use-model-context';
export default function useModelState() {
  return useModelContext().STATE;
}