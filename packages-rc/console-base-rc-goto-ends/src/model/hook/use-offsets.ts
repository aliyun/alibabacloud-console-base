import useModelProps from './_use-model-props';

export default function useOffsets(): [number, number] {
  const {
    offsetX = 12,
    offsetY = 12
  } = useModelProps();
  
  return [offsetX, offsetY];
}