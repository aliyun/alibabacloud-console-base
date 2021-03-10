import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  InputText,
  PreJson
} from '@alicloud/demo-rc-elements';

import UA, {
  Ua,
  parse
} from '../../src';

const ScInputText = styled(InputText)`
  width: 100%;
`;

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
    <ScInputText {...{
      placeholder: 'Paste ua string here',
      defaultValue: navigator.userAgent,
      onChange: handleChange
    }} />
    <PreJson o={stateUa} />
  </>;
}
