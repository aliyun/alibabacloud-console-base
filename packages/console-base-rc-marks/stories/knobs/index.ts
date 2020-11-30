import {
  useMemo,
  useEffect
} from 'react';
import {
  boolean,
  select
} from '@storybook/addon-knobs';

import {
  MarkProps
} from '../../src';

interface IProps {
  onChange(props: Partial<MarkProps>): void;
}

export default function Knobs({
  onChange
}: IProps): null {
  const component0 = select<'sup' | 'sub' | 'span'>('props.component', ['sup', 'sub', 'span'], 'span');
  const componentInUse = boolean('启用 props.component', false);
  const component = componentInUse ? component0 : undefined;
  const align0 = select<'left' | 'center' | 'right'>('props.align', ['left', 'center', 'right'], 'center');
  const alignInUse = boolean('启用 props.align', false);
  const align = alignInUse ? align0 : undefined;
  
  const props: Partial<MarkProps> = useMemo((): Partial<MarkProps> => ({
    component,
    align
  }), [
    component,
    align
  ]);
  
  useEffect(() => onChange(props), [onChange, props]);
  
  return null;
}
