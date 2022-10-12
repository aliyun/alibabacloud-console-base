import {
  useMemo,
  useEffect
} from 'react';
import {
  text,
  boolean,
  optionsKnob
} from '@storybook/addon-knobs';

import {
  LoadingProps
} from '../../src';

interface IProps {
  onChange(props: Partial<LoadingProps>): void;
}

function optional<T>({
  value,
  inUse
}: {
  value: T;
  inUse: boolean;
}): T | undefined {
  return inUse ? value : undefined;
}

function omitUndefined(o: any): Partial<LoadingProps> {
  const props = {} as any;
  
  for (const k in o) {
    // eslint-disable-next-line no-prototype-builtins
    if (o.hasOwnProperty(k) && o[k] !== undefined) {
      props[k] = o[k];
    }
  }
  
  return props as Partial<LoadingProps>;
}

export default function Knobs({
  onChange
}: IProps): null {
  const message = optional<string>({
    value: text('props.message', 'loading custom text'),
    inUse: boolean('启用 props.message', false)
  });
  const status = optional<LoadingProps['status']>({
    value: optionsKnob<LoadingProps['status']>('props.status', {
      loading: 'loading',
      error: 'error',
      empty: 'empty'
    }, 'loading', {
      display: 'inline-radio'
    }),
    inUse: boolean('启用 props.status', false)
  });
  const align = optional<LoadingProps['align']>({
    value: optionsKnob<LoadingProps['align']>('props.align', {
      l: 'l',
      r: 'r',
      c: 'c'
    }, 'c', {
      display: 'inline-radio'
    }),
    inUse: boolean('启用 props.align', false)
  });
  const inline = boolean('props.inline', false);
  
  const props = useMemo(() => omitUndefined({
    message,
    status,
    align,
    inline
  }), [
    message,
    status,
    align,
    inline
  ]);
  
  useEffect(() => onChange(props), [onChange, props]);
  
  return null;
}
