import useModelState from './_use-model-state';

export default function useStateNavOffset(): number {
  return useModelState().navOffset;
}
