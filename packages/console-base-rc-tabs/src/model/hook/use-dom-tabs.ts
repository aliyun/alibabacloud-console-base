import useModelState from './_use-model-state';

export default function useDomTabs(): HTMLDivElement | null {
  return useModelState().domTabs;
}
