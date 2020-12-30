import useModelProps from './_use-model-props';

export default function useDispatchClose(): () => void {
  const {
    onClose
  } = useModelProps();
  
  return onClose;
}
