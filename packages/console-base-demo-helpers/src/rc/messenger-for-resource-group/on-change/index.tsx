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
  MessengerResourceGroup
} from '@alicloud/console-base-messenger';

export default function OnChange(): JSX.Element {
  const [stateValue, setStateValue] = useState<MessengerResourceGroup | null>(null);
  
  useEffect(() => forApp.onResourceGroupChange(setStateValue), []);
  
  return <>
    <H3>forApp.onResourceGroupChange() → stateValue</H3>
    <CleanJson o={stateValue} />
  </>;
}
