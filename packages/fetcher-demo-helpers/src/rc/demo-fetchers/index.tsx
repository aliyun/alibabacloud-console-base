import React, {
  useState
} from 'react';
import styled from 'styled-components';

import {
  H2,
  H3
} from '@alicloud/demo-rc-elements';

import {
  IDemoConfig,
  IDemoHelperFetcher
} from '../../types';
import DisplayJson from '../display-json';
import Knobs from '../knobs';
import RequestWithConfig from '../request-with-config';

interface IProps {
  title?: string | JSX.Element;
  urls?: string[];
  defaultConfig?: IDemoConfig;
  fetcher0: IDemoHelperFetcher;
  fetcher1: IDemoHelperFetcher;
}

const ScTwoFetchers = styled.div`
  display: flex;
`;

const ScOneFetcher = styled.div`
  flex: 1;
  overflow: auto;
`;

export default function FetcherDemoRcFetchers({
  title = 'fetcher 效果对比',
  urls,
  defaultConfig = {},
  fetcher0,
  fetcher1
}: IProps): JSX.Element {
  const [stateConfig, setStateConfig] = useState<IDemoConfig>(defaultConfig);
  
  return <>
    <H2>{title}</H2>
    <Knobs {...{
      urls,
      defaults: defaultConfig,
      onChange: setStateConfig
    }} />
    <DisplayJson {...{
      what: 'config',
      data: stateConfig
    }} />
    <ScTwoFetchers>
      <ScOneFetcher>
        <H3>无拦截器</H3>
        <RequestWithConfig {...{
          config: stateConfig,
          request: fetcher0.request
        }} />
      </ScOneFetcher>
      <ScOneFetcher>
        <H3>有拦截器</H3>
        <RequestWithConfig {...{
          config: stateConfig,
          request: fetcher1.request
        }} />
      </ScOneFetcher>
    </ScTwoFetchers>
  </>;
}
