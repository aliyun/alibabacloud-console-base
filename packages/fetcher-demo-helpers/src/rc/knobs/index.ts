import {
  useEffect,
  useMemo
} from 'react';
import {
  text,
  select,
  boolean,
  number
} from '@storybook/addon-knobs';

import {
  IDemoConfig
} from '../../types';
import {
  URLS
} from '../../const';

interface IProps {
  urls?: Record<string, string>;
  defaults?: Partial<IDemoConfig>;
  onChange(config: IDemoConfig): void;
}

export default function Knobs({
  urls = URLS,
  defaults = {},
  onChange
}: IProps): null {
  const url0 = select('config.url', Object.values(urls), defaults.url || urls[0]);
  const urlCustom = boolean('custom url', false);
  const urlCustomized = text('url (custom)', '');
  const url = urlCustom ? urlCustomized : url0;
  const method = select<IDemoConfig['method']>('config.method', ['GET', 'DELETE', 'POST', 'PUT', 'PATCH', 'JSONP'], defaults.method);
  const timeout0 = number('config.timeout (ms)', defaults.timeout || 0);
  const timeoutEnabled = boolean('timeout enabled', false);
  const timeout = timeoutEnabled ? timeout0 : undefined;
  
  const config: IDemoConfig = useMemo((): IDemoConfig => {
    const o: IDemoConfig = {
      url
    };
    
    if (method) {
      o.method = method;
    }
    
    if (timeout !== undefined) {
      o.timeout = timeout;
    }
    
    return o;
  }, [url, method, timeout]);
  
  useEffect(() => {
    onChange(config);
  }, [config, onChange]);
  
  return null;
}
