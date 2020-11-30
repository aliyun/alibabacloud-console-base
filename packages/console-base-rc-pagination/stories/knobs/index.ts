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

export default function Knobs({
  onChange
}: IProps): null {
  const page0 = number('props.page', 1);
  const pagInUse = boolean('启用 props.page', true);
  const pageSize0 = number('props.pageSize', 10);
  const pageSizInUse = boolean('启用 props.pageSize', true);
  const total0 = number('props.total', 123);
  const totalInUse = boolean('启用 props.total', true);
  
  const theme = optionsKnob<PaginationProps['theme']>('props.theme', {
    simplest: 'simplest',
    simple: 'simple'
  }, 'simple', {
    display: 'inline-radio'
  });
  const align = optionsKnob<PaginationProps['align']>('props.align', {
    left: 'left',
    center: 'center',
    right: 'right'
  }, 'left', {
    display: 'inline-radio'
  });
  
  const page = pagInUse ? page0 : undefined;
  const pageSize = pageSizInUse ? pageSize0 : undefined;
  const total = totalInUse ? total0 : undefined;
  
  const props: PaginationProps = useMemo((): PaginationProps => ({
    page,
    pageSize,
    total,
    theme,
    align
  }), [
    page,
    pageSize,
    total,
    theme,
    align
  ]);
  
  useEffect(() => onChange(props), [onChange, props]);
  
  return null;
}
