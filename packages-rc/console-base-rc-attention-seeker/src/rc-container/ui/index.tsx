import React from 'react';

import {
  useAttentionSeeker
} from '../../model';
import Backdrop from '../backdrop';
import Protector from '../protector';

export default function Ui(): JSX.Element | null {
  const attentionSeeker = useAttentionSeeker();
  
  if (!attentionSeeker) {
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
    {attentionSeeker.options?.protect ? <Protector /> : null}
    <Backdrop />
  </>;
}
