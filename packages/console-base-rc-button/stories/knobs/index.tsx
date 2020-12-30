import {
  useMemo,
  useEffect
} from 'react';
import {
  text,
  boolean,
  select
} from '@storybook/addon-knobs';

import {
  IconType
} from '@alicloud/console-base-rc-icon';

import {
  ButtonProps,
  EButtonTheme,
  EButtonSize
} from '../../src';

enum EGroup {
  CONTENT = '内容',
  LOOK = '长相',
  OTHER = '其他'
}

interface IProps {
  onChange(props: ButtonProps): void;
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

function omitUndefined(o: any): ButtonProps {
  const props = {} as any;
  
  for (const k in o) {
    // eslint-disable-next-line no-prototype-builtins
    if (o.hasOwnProperty(k) && o[k] !== undefined) {
      props[k] = o[k];
    }
  }
  
  return props as ButtonProps;
}

export default function Knobs({
  onChange
}: IProps): null {
  const label = text('props.label', 'button label', EGroup.CONTENT);
  const title = text('props.title', '', EGroup.CONTENT);
  const iconLeft = optional({
    value: text('props.iconLeft', '', EGroup.CONTENT),
    inUse: boolean('启用 props.iconLeft', false, EGroup.CONTENT)
  });
  const iconRight = optional({
    value: text('props.iconRight', '', EGroup.CONTENT),
    inUse: boolean('启用 props.iconRight', false, EGroup.CONTENT)
  });
  
  const theme = optional<EButtonTheme>({
    value: select<EButtonTheme>('props.theme', Object.values(EButtonTheme), EButtonTheme.PRIMARY, EGroup.LOOK),
    inUse: boolean('启用 props.theme', false, EGroup.LOOK)
  });
  const size = optional<EButtonSize>({
    value: select<EButtonSize>('props.size', Object.values(EButtonSize), EButtonSize.M, EGroup.LOOK),
    inUse: boolean('启用 props.size', false, EGroup.LOOK)
  });
  const block = boolean('props.block', false, EGroup.LOOK);
  const ellipsis = boolean('props.ellipsis', false, EGroup.LOOK);
  const loading = boolean('props.loading', false, EGroup.LOOK);
  const disabled = boolean('props.disabled', false, EGroup.LOOK);
  
  const href = text('props.href', '', EGroup.OTHER);
  const target = text('props.target', '', EGroup.OTHER);
  const spm = text('props.spm', '', EGroup.OTHER);
  const component = select<'button' | 'a' | 'span' | 'div' | undefined>('props.component', ['button', 'a', 'span', 'div'], undefined, EGroup.OTHER);
  
  const props = useMemo(() => omitUndefined({
    component,
    label,
    title,
    iconLeft: iconLeft as IconType,
    iconRight: iconRight as IconType,
    href,
    target,
    spm,
    theme,
    size,
    block,
    ellipsis,
    loading,
    disabled
  }), [
    component,
    label,
    title,
    iconLeft,
    iconRight,
    href,
    target,
    spm,
    theme,
    size,
    block,
    ellipsis,
    loading,
    disabled
  ]);
  
  useEffect(() => onChange(props), [onChange, props]);
  
  return null;
}
