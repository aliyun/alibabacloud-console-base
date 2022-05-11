import useModelProps from './_use-model-props';
import usePages from './use-pages';

export default function useHidden(): boolean {
  const {
    hideWhenOne
  } = useModelProps();
  const pages = usePages();
  
  return hideWhenOne && pages <= 1;
}
