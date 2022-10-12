import {
  useMemo,
  useEffect
} from 'react';
import {
  number,
  boolean,
  optionsKnob
} from '@storybook/addon-knobs';

import {
  PaginationProps
} from '../../src';

interface IProps {
  onChange(props: PaginationProps): void;
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

function omitUndefined(o: Record<string, unknown>): PaginationProps {
  const props: Record<string, unknown> = {};
  
  for (const k in o) {
    // eslint-disable-next-line no-prototype-builtins
    if (o.hasOwnProperty(k) && o[k] !== undefined) {
      props[k] = o[k];
    }
  }
  
  return props as PaginationProps;
}

export default function Knobs({
  onChange
}: IProps): null {
  const total = optional<number>({
    value: number('props.total', 1234),
    inUse: boolean('启用 props.total', true)
  });
  const page = optional<number>({
    value: number('props.page', 1),
    inUse: boolean('启用 props.page', false)
  });
  const pageSize = optional<number>({
    value: number('props.pageSize', 20),
    inUse: boolean('启用 props.pageSize', true)
  });
  const totalLimit = optional<number>({
    value: number('props.totalLimit', 1000),
    inUse: boolean('启用 props.totalLimit', false)
  });
  const theme = optional<PaginationProps['theme']>({
    value: optionsKnob<PaginationProps['theme']>('props.theme', {
      full: 'full',
      simple: 'simple',
      simplest: 'simplest'
    }, 'full', {
      display: 'inline-radio'
    }),
    inUse: boolean('启用 props.theme', true)
  });
  const align = optional<PaginationProps['align']>({
    value: optionsKnob<PaginationProps['align']>('props.align', {
      left: 'left',
      center: 'center',
      right: 'right'
    }, 'left', {
      display: 'inline-radio'
    }),
    inUse: boolean('启用 props.align', true)
  });
  const noText = optional<boolean>({
    value: boolean('props.noText', true),
    inUse: boolean('启用 props.noText', false)
  });
  
  const props: PaginationProps = useMemo((): PaginationProps => omitUndefined({
    total,
    page,
    pageSize,
    totalLimit,
    theme,
    align,
    noText
  }), [
    total,
    page,
    pageSize,
    totalLimit,
    theme,
    align,
    noText
  ]);
  
  useEffect(() => onChange(props), [onChange, props]);
  
  return null;
}
