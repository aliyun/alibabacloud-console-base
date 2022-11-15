import {
  useEffect
} from 'react';

import {
  sidePanelItemSet,
  sidePanelItemRemove,
  onSidePanelItemClick,
  onSidePanelItemActiveChange
} from '@alicloud/console-base-messenger-side-panel';

import {
  IMessengerSidePanelItemProps
} from '../../types';

export default function MessengerSidePanelPanelItem({
  item: {
    onClick,
    onActiveChange,
    ...item
  }
}: IMessengerSidePanelItemProps): null {
  useEffect(() => {
    sidePanelItemSet(item);
  }, [item]);
  
  useEffect(() => onSidePanelItemClick(key => {
    if (key === item.key) {
      onClick?.();
    }
  }), [item.key, onClick]);
  
  useEffect(() => onSidePanelItemActiveChange((key, active) => {
    if (key === item.key) {
      onActiveChange?.(active);
    }
  }), [item.key, onActiveChange]);
  
  useEffect(() => {
    return () => sidePanelItemRemove(item.key);
  }, [item.key]);
  
  return null;
}