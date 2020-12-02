import useModelProps from './_use-model-props';

export default function usePropClosable(): boolean {
  const {
    closable = true
  } = useModelProps();
  
  return closable;
}

