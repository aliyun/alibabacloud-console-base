import useModelState from './_use-model-state';
export default function useStateLocked() {
  return useModelState().locked;
}