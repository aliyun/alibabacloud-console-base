import useModelProps from './_use-model-props';

export default function usePropBackdrop(): boolean {
  const {
    backdrop = true
  } = useModelProps();
  
  return backdrop;
}

