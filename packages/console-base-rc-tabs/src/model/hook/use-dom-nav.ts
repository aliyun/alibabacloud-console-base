import useModelState from './_use-model-state';

export default function useDomNav(): HTMLDivElement | null {
  return useModelState().domNav;
}
