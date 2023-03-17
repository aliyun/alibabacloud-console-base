import {
  useMemo
} from 'react';

import {
  TopNavButtonProps,
  useProps
} from '../../model';

export default function useMenuItemHelp(): TopNavButtonProps | null {
  const {
    help
  } = useProps();
  
  return useMemo(() => {
    if (!help) {
      return null;
    }
  
    let href;
    let title;
  
    if (typeof help === 'string') {
      href = help;
    } else {
      href = help.href;
      title = help.title;
    }
  
    if (!href) {
      return null;
    }
  
    return {
      key: 'help',
      label: {
        icon: 'help-circle'
      },
      href,
      title
    };
  }, [help]);
}
