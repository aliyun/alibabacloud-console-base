import useModelState from './_use-model-state';

export default function useAutoCloseTick(): number {
  return useModelState().autoCloseTick;
}