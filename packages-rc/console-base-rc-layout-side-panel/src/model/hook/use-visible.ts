import useModelProps from './_use-model-props';

export default function useVisible(): boolean {
  const {
    visible = true
  } = useModelProps();
  
  return visible;
}