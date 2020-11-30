import React, {
  useState,
  useEffect
} from 'react';

import {
  H3,
  CleanJson
} from '@alicloud/demo-rc-elements';
import {
  forApp,
  MessengerRegionOnChange
} from '@alicloud/console-base-messenger';

export default function OnChange(): JSX.Element {
  const [stateValue, setStateValue] = useState<MessengerRegionOnChange | null>(null);
  
  useEffect(() => forApp.onRegionChange(setStateValue), []);
  
  return <>
    <H3>forApp.onRegionChange() → stateValue</H3>
    <CleanJson o={stateValue} />
  </>;
}
