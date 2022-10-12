import React, {
  useState
} from 'react';

import {
  PreJson
} from '@alicloud/demo-rc-elements';

import {
  IDemoConfig,
  IDemoFnFetchRequest
} from '../../types';
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
    <PreJson o={stateConfig} />
    <RequestWithConfig {...{
      config: stateConfig,
      request
    }} />
  </>;
}
