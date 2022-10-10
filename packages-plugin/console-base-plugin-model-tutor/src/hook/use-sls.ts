import {
  useMemo
} from 'react';

import createLogger, {
  LogFn
} from '@alicloud/console-logger-sls';

import {
  SLS_TOPIC_PREFIX
} from '../const';

import useModelProps from './_use-model-props';

export default function useSls(): LogFn | null {
  const {
    slsOptions
  } = useModelProps();
  
  return useMemo(() => (slsOptions ? createLogger({
    ...slsOptions,
    topicPrefix: SLS_TOPIC_PREFIX
  }) : null), [slsOptions]);
}