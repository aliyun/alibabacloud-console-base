import React, {
  useState,
  useCallback,
  useEffect
} from 'react';

import {
  Button
} from '@alicloud/demo-rc-elements';

import {
  IDemoConfig,
  IDemoFnFetchRequest
} from '../../types';
import {
  ELoadingStatus
} from '../../const';
import Duration from '../duration';
import DisplayJson from '../display-json';

interface IProps {
  config: IDemoConfig;
  request: IDemoFnFetchRequest;
}

export default function RequestWithConfig({
  config,
  request
}: IProps): JSX.Element {
  const [stateStatus, setStateStatus] = useState<ELoadingStatus>(ELoadingStatus.IDLE);
  const [stateStart, setStateStart] = useState<number>(0);
  const [stateEnd, setStateEnd] = useState<number>(0);
  const [stateData, setStateData] = useState<unknown>();
  const [stateError, setStateError] = useState<Error | null>(null);
  
  const doRequest = useCallback(() => {
    setStateStatus(ELoadingStatus.LOADING);
    setStateStart(Date.now);
    
    request(config).then(data => {
      setStateStatus(ELoadingStatus.SUCCESS);
      setStateData(data);
    }, error => {
      setStateStatus(ELoadingStatus.ERROR);
      setStateError(error);
    }).then(() => {
      setStateEnd(Date.now());
    });
  }, [request, config]);
  
  useEffect(doRequest, [doRequest]);
  
  return <>
    <Button onClick={doRequest}>request</Button>
    <Duration duration={stateEnd - stateStart} />
    <DisplayJson {...{
      what: 'result',
      status: stateStatus,
      data: stateData,
      error: stateError
    }} />
  </>;
}
