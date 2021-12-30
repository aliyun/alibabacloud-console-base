import React, {
  useState,
  useCallback,
  useEffect
} from 'react';

import {
  InputJsonObject
} from '../../src';

interface IValue {
  attr: string;
}

export default function DemoInputJsonObject(): JSX.Element {
  const [stateValue, setStateValue] = useState<IValue>({
    attr: '12345'
  });
  const handleChange = useCallback(value => {
    console.info('CHANGE', value); // eslint-disable-line no-console
    
    setStateValue(value);
  }, [setStateValue]);
  
  useEffect(() => {
    setTimeout(() => setStateValue({
      attr: 'i will change'
    }), 3000);
  }, []);
  
  return <InputJsonObject {...{
    value: stateValue,
    onChange: handleChange
  }} />;
}
