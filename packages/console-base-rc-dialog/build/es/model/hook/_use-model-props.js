import useModelContext from './_use-model-context';
/**
 * 返回 PROPS
 */

export default function useModelProps() {
  var _useModelContext = useModelContext(),
      PROPS = _useModelContext.PROPS;

  return PROPS;
}