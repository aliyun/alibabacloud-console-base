import useModelState from './_use-model-state';

export default function useDomDrop(): HTMLDivElement | null {
  return useModelState().domDrop;
}
