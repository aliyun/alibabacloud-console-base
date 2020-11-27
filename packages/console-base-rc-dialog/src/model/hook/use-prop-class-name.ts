import useModelProps from './_use-model-props';

export default function usePropClassName(): string | undefined {
  return useModelProps().className;
}

