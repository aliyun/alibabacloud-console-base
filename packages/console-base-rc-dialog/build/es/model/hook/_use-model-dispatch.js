import useModelContext from './_use-model-context';
export default function useModelDispatch() {
  return useModelContext().dispatch;
}