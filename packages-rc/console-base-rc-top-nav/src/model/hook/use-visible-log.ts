import useModelState from './_use-model-state';

export default function useVisibleLogo(): boolean {
  return useModelState().dockLogoState;
}