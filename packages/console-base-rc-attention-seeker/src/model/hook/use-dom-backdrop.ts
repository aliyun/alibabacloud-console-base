import useModelState from './_use-model-state';

export default function useDomBackdrop(): HTMLOrSVGElement | null {
  return useModelState().domBackdrop;
}
