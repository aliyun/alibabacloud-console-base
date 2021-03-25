import {
  useEffect
} from 'react';

import useHandleRefreshDropPosition from '../../hook/use-handle-refresh-drop-position';

export default function RefreshDropPosition(): null {
  useEffect(useHandleRefreshDropPosition, [useHandleRefreshDropPosition]);
  
  return null;
}
