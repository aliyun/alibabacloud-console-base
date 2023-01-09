import {
  useEffect
} from 'react';

import {
  toggleBodyClass
} from '@alicloud/console-base-theme';

export default function DarkBodyClass(): null {
  useEffect(() => {
    toggleBodyClass(true);
    
    return () => toggleBodyClass(false);
  }, []);
  
  return null;
}