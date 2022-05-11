import useModelState from './_use-model-state';

export default function useDomBackdrop(): HTMLDivElement | null {
  return useModelState().domBackdrop;
}
