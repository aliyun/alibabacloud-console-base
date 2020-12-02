import React, {
  useState,
  useCallback,
  useEffect
} from 'react';

import {
  Button,
  PrePromise
} from '@alicloud/demo-rc-elements';

import {
  IDemoConfig,
  IDemoFnFetchRequest
} from '../../types';

interface IProps {
  config: IDemoConfig;
  request: IDemoFnFetchRequest;
}

export default function RequestWithConfig({
  config,
  request
}: IProps): JSX.Element {
  const [statePromise, setStatePromise] = useState<Promise<unknown> | null>(null);
  const handleDoRequest = useCallback(() => setStatePromise(request(config)), [request, config]);
  
  useEffect(handleDoRequest, [handleDoRequest]);
  
  return <>
    <Button onClick={handleDoRequest}>request</Button>
    <PrePromise headnote="result" promise={statePromise} />
  </>;
}
