import {
  useEffect
} from 'react';

import {
  MessengerSidePanelQuickTopContainer,
  sidePanelQuickTopSetContainer
} from '@alicloud/console-base-messenger-side-panel';

interface IProps {
  container: MessengerSidePanelQuickTopContainer;
}

export default function MessengerSidePanelQuickTop({
  container
}: IProps): null {
  useEffect(() => {
    sidePanelQuickTopSetContainer(container);
    
    return () => sidePanelQuickTopSetContainer(null);
  }, [container]);
  
  return null;
}
