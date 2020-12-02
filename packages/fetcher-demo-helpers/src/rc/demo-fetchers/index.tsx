import React, {
  useState
} from 'react';
import styled from 'styled-components';

import {
  H2,
  H3,
  PreJson
} from '@alicloud/demo-rc-elements';

import {
  IDemoConfig,
  IDemoHelperFetcher
} from '../../types';
import Knobs from '../knobs';
import RequestWithConfig from '../request-with-config';

interface IProps {
  title?: string | JSX.Element;
  urls?: string[];
  defaultConfig?: IDemoConfig;
  fetcher0: IDemoHelperFetcher;
  fetcher1: IDemoHelperFetcher;
  fetcher0Title?: string | JSX.Element;
  fetcher1Title?: string | JSX.Element;
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
  fetcher1,
  fetcher0Title = '无拦截器',
  fetcher1Title = '有拦截器'
}: IProps): JSX.Element {
  const [stateConfig, setStateConfig] = useState<IDemoConfig>(defaultConfig);
  
  return <>
    <H2>{title}</H2>
    <Knobs {...{
      urls,
      defaults: defaultConfig,
      onChange: setStateConfig
    }} />
    <PreJson {...{
      headnote: 'config',
      o: stateConfig
    }} />
    <ScTwoFetchers>
      <ScOneFetcher>
        <H3>{fetcher0Title}</H3>
        <RequestWithConfig {...{
          config: stateConfig,
          request: fetcher0.request
        }} />
      </ScOneFetcher>
      <ScOneFetcher>
        <H3>{fetcher1Title}</H3>
        <RequestWithConfig {...{
          config: stateConfig,
          request: fetcher1.request
        }} />
      </ScOneFetcher>
    </ScTwoFetchers>
  </>;
}
