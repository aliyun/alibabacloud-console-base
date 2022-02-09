import useModelProps from './_use-model-props';

export default function usePages(): number {
  const {
    total = 0,
    pageSize = 10,
    totalLimit = -1
  } = useModelProps();
  
  return Math.ceil((totalLimit > 0 && total > totalLimit ? totalLimit : total) / pageSize);
}
