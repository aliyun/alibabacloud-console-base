import useEffectFilterVisible from './use-effect-filter-visible';
import useEffectResetFilterWhenItemsChange from './use-effect-reset-filter-when-items-change';

export default function useEffects(): void {
  useEffectFilterVisible();
  useEffectResetFilterWhenItemsChange();
}
