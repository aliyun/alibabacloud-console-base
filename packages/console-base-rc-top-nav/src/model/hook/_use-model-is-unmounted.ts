import useModelContext from './_use-model-context';

export default function useModelIsUnmounted(): () => boolean {
  return useModelContext().isUnmounted;
}
