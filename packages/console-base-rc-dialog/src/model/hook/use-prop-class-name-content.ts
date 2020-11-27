import useModelProps from './_use-model-props';

export default function usePropClassNameContent(): string | undefined {
  return useModelProps().classNameOnBody;
}

