import {
  useMemo
} from 'react';

import useModelProps from './_use-model-props';

export default function useAffixElement(): Element | null {
  const {
    affix
  } = useModelProps();
  
  return useMemo((): Element | null => {
    try {
      if (typeof affix === 'string') {
        return document.querySelector(affix);
      } else {
        return affix || null;
      }
    } catch (err) {
      return null;
    }
  }, [affix]);
}