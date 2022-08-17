import React, {
  useState,
  useCallback
} from 'react';

import {
  InputText,
  PreJson
} from '@alicloud/demo-rc-elements';

import UA, {
  Ua,
  parse
} from '../../src';
import PkgInfo from '../pkg-info';

export default function DemoDefault(): JSX.Element {
  const [stateUa, setStateUa] = useState<Ua>(UA);
  const handleChange = useCallback(value => {
    const uaString = value.trim();
    
    if (!uaString) {
      setStateUa(UA);
    } else {
      setStateUa(parse(uaString));
    }
  }, []);
  
  return <>
    <PkgInfo />
    <InputText {...{
      block: true,
      placeholder: 'Paste ua string here',
      defaultValue: navigator.userAgent,
      onChange: handleChange
    }} />
    <PreJson o={stateUa} />
  </>;
}
