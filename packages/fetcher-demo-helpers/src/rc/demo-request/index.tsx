import React, {
  useState
} from 'react';

import {
  IDemoConfig,
  IDemoFnFetchRequest
} from '../../types';
import DisplayJson from '../display-json';
import RequestWithConfig from '../request-with-config';
import Knobs from '../knobs';

interface IProps {
  defaultConfig?: IDemoConfig;
  request: IDemoFnFetchRequest;
}

export default function FetcherDemoRcRequest({
  defaultConfig = {},
  request
}: IProps): JSX.Element {
  const [stateConfig, setStateConfig] = useState<IDemoConfig>(defaultConfig);
  
  return <>
    <Knobs {...{
      defaults: defaultConfig,
      onChange: setStateConfig
    }} />
    <DisplayJson {...{
      what: 'config',
      data: stateConfig
    }} />
    <RequestWithConfig {...{
      config: stateConfig,
      request
    }} />
  </>;
}
