import {
  isValidElement
} from 'react';

import {
  EDialogLockState
} from '../enum';
import {
  IDialogButtonProps,
  TDialogButton,
  TDialogData
} from '../types';

/**
 * 为了方便使用，button 被设计为可以传入 string | JSX.Element | IDialogButtonProps，但最终使用的时候还是要转成 IDialogButtonProps
 */
function normalizeButton<R = void, D = TDialogData>(button: TDialogButton<R, D>): IDialogButtonProps<R, D> {
  if (typeof button === 'string' || isValidElement(button)) {
    return {
      label: button
    };
  }
  
  return { // 因为需要往里边塞 spm disabled 等属性，故浅拷贝，保证不能修改传入的对象
    ...button
  };
}

/**
 * 获得最终用于展示的按钮 props
 */
export default function processButtons<R = void, D = TDialogData>(buttons: TDialogButton<R, D>[] = [], locked: EDialogLockState): IDialogButtonProps<R, D>[] {
  let hasPrimary = false;
  
  const buttonAttr: IDialogButtonProps<R, D>[] = buttons.reduce((reduced: IDialogButtonProps<R, D>[], v: TDialogButton<R, D>, i) => {
    if (!v) { // 去掉 null 等
      return reduced;
    }
    
    const buttonProps = normalizeButton<R, D>(v);
    
    buttonProps.spm = buttonProps.spm || `${i}`; // 保证 spm 一定存在
    
    if (buttonProps.primary) {
      hasPrimary = true;
    }
    
    reduced.push(buttonProps);
    
    return reduced;
  }, []);
  
  // 对于多于 2 个按钮的，第一个自动为 primary
  if (!hasPrimary && buttonAttr.length > 1) {
    buttonAttr[0]!.primary = true; // eslint-disable-line @typescript-eslint/no-non-null-assertion
  }
  
  if (locked !== EDialogLockState.NO) {
    buttonAttr.forEach(v => {
      v.disabled = true;
      
      if (locked === EDialogLockState.LOADING && v.primary) {
        v.loading = true;
      }
    });
  }
  
  return buttonAttr;
}
