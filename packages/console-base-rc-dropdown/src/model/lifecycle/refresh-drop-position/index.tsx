import {
  useEffect
} from 'react';

import useHandleRefreshDropPosition from '../../hook/use-handle-refresh-drop-position';

export default function RefreshDropPosition(): null {
  const handleRefreshDropPosition = useHandleRefreshDropPosition();
  
  useEffect(handleRefreshDropPosition, [handleRefreshDropPosition]);
  
  return null;
}
