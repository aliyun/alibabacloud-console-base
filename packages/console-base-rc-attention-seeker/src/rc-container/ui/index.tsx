import React from 'react';

import {
  useAttentionSeeker
} from '../../model';
import Backdrop from '../backdrop';
import SandwichUpper from '../sandwich-upper';
import SandwichBelow from '../sandwich-below';

export default function Ui(): JSX.Element | null {
  const element = useAttentionSeeker()?.element;
  
  if (!element) {
    return null;
  }
  
  /**
   * 层级示意图
   * 
   * ---- SandwichUpper ----
   * ---- element 通过 className 调整 z-index ----
   * ---- SandwichBelow ----
   * ---- Backdrop ---
   */
  return <>
    <SandwichUpper />
    <SandwichBelow />
    <Backdrop />
  </>;
}
