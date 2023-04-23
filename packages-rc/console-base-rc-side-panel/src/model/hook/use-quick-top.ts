import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

interface IQuickTop {
  container?: Window | HTMLElement | null;
  visible: boolean;
}

export default function useQuickTop(): IQuickTop {
  const {
    quickTopContainer
  } = useModelProps();
  const {
    quickTopVisible
  } = useModelState();
  
  return {
    container: quickTopContainer,
    visible: quickTopVisible
  };
}
