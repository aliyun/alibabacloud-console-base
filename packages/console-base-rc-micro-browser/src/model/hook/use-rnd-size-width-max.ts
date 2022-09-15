import useModelProps from './_use-model-props';

export default function useRndSizeWidthMax(): number {
  const {
    widthMax
  } = useModelProps();
  
  return widthMax;
}
