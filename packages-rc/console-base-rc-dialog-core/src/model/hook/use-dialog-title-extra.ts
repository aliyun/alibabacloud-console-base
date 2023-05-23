import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useDialogTitleExtra(): string | JSX.Element | undefined {
  const {
    titleExtra
  } = useModelProps();
  const {
    data
  } = useModelState();
  
  return typeof titleExtra === 'function' ? titleExtra(data) : titleExtra;
}
