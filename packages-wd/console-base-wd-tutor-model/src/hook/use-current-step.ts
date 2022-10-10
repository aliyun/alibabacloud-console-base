import useModelState from './_use-model-state';

export default function useCurrentStep(): number {
  return useModelState().step;
}
