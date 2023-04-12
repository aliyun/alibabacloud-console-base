import useModelState from './_use-model-state';

export default function useHovered(): boolean {
  return useModelState().hovered;
}
