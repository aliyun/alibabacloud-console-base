import useModelState from './_use-model-state';

export default function useStateId(): string {
  return useModelState().id;
}
