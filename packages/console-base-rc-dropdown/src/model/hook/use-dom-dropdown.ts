import useModelState from './_use-model-state';

export default function useDomDropdown(): HTMLDivElement | null {
  return useModelState().domDropdown;
}
