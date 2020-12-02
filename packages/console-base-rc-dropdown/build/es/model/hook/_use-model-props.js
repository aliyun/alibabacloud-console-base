import useModelContext from './_use-model-context';
export default function useModelProps() {
  return useModelContext().PROPS;
}