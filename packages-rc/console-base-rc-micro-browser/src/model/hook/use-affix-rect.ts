import {
  MereDomRect,
  getRect
} from '@alicloud/mere-dom';

import useAffixElement from './use-affix-element';

export default function useAffixRect(): MereDomRect | null {
  const affixElement = useAffixElement();
  
  return affixElement ? getRect(affixElement) : null; // 不要 useMemo 因为虽然 affix 虽然可能不变，但其位置会随时发生变化
}