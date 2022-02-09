import useModelProps from './_use-model-props';

export default function usePages(): number {
  const {
    total = 0,
    pageSize = 10
  } = useModelProps();
  
  return Math.ceil(total / pageSize);
}
