import useModelProps from './_use-model-props';
export default function usePropBackdrop() {
  var _useModelProps = useModelProps(),
      _useModelProps$backdr = _useModelProps.backdrop,
      backdrop = _useModelProps$backdr === void 0 ? true : _useModelProps$backdr;

  return backdrop;
}