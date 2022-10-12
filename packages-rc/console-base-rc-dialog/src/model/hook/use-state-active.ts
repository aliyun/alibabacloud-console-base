import useModelState from './_use-model-state';

export default function useStateActive(): boolean {
  return useModelState().active;
}
