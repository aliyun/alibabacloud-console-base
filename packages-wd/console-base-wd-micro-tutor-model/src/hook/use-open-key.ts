import useModelState from './_use-model-state';

export default function useOpenKey(): string {
  return useModelState().openKey;
}
