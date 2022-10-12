import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function usePage(): number {
  const {
    page
  } = useModelProps();
  const {
    page: pageInState
  } = useModelState();
  
  return page ?? pageInState;
}