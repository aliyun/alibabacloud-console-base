import useModelProps from './_use-model-props';

export default function usePropPinnable(): boolean {
  return useModelProps().pinnable;
}
