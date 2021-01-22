import {
  Z_INDEX
} from '@alicloud/console-base-theme';

import {
  IDialogProps,
  IDialogPropsMutable
} from '../../types';
import {
  IContextProps
} from '../types';
import {
  EDialogMode
} from '../../const';

export default function getContextProps(propps: IDialogProps, propsUpdate?: IDialogPropsMutable): IContextProps {
  const finalProps = {
    ...propps,
    ...propsUpdate
  };
  
  finalProps.mode = finalProps.mode ?? EDialogMode.NORMAL;
  finalProps.backdrop = finalProps.backdrop ?? true;
  finalProps.esc = finalProps.esc ?? true;
  finalProps.closable = finalProps.closable ?? true;
  finalProps.zIndex = finalProps.zIndex ?? (finalProps.mode === EDialogMode.SLIDE ? Z_INDEX.DIALOG_SLIDE : Z_INDEX.DIALOG_NORMAL);
  finalProps.zIndexBackdrop = finalProps.zIndexBackdrop ?? (finalProps.mode === EDialogMode.SLIDE ? Z_INDEX.BACKDROP_SLIDE : Z_INDEX.BACKDROP_NORMAL);
  
  return finalProps;
}
