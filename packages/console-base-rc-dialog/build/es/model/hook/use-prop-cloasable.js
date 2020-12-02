import useModelProps from './_use-model-props';
export default function usePropClosable() {
  var _useModelProps = useModelProps(),
      _useModelProps$closab = _useModelProps.closable,
      closable = _useModelProps$closab === void 0 ? true : _useModelProps$closab;

  return closable;
}