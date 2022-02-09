import {
  useMemo,
  useEffect
} from 'react';
import {
  text,
  boolean,
  select,
  optionsKnob
} from '@storybook/addon-knobs';

import {
  EIconType
} from '@alicloud/console-base-rc-icon';

import {
  ButtonProps,
  ButtonTheme,
  ButtonSize
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

function omitUndefined(o: Record<string, unknown>): ButtonProps {
  const props: Record<string, unknown> = {};
  
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
    value: select('props.iconLeft', Object.keys(EIconType), 'loading', EGroup.CONTENT),
    inUse: boolean('启用 props.iconLeft', false, EGroup.CONTENT)
  });
  const iconRight = optional({
    value: select('props.iconRight', Object.keys(EIconType), 'loading', EGroup.CONTENT),
    inUse: boolean('启用 props.iconRight', false, EGroup.CONTENT)
  });
  const iconSpacing = optional({
    value: optionsKnob<ButtonProps['iconSpacing']>('props.iconSpacing', {
      small: 'small',
      no: 'no'
    }, 'small', {
      display: 'inline-radio'
    }, EGroup.LOOK),
    inUse: boolean('启用 props.iconSpacing', false, EGroup.LOOK)
  });
  
  const theme = optional<ButtonTheme>({
    value: optionsKnob<ButtonTheme>('props.theme', ButtonTheme, ButtonTheme.PRIMARY, {
      display: 'inline-radio'
    }, EGroup.LOOK),
    inUse: boolean('启用 props.theme', true, EGroup.LOOK)
  });
  const size = optional<ButtonSize>({
    value: optionsKnob<ButtonSize>('props.size', ButtonSize, ButtonSize.M, {
      display: 'inline-radio'
    }, EGroup.LOOK),
    inUse: boolean('启用 props.size', false, EGroup.LOOK)
  });
  const block = boolean('props.block', false, EGroup.LOOK);
  const ellipsis = boolean('props.ellipsis', false, EGroup.LOOK);
  const loading = boolean('props.loading', false, EGroup.LOOK);
  const active = boolean('props.active', false, EGroup.LOOK);
  const disabled = boolean('props.disabled', false, EGroup.LOOK);
  
  const href = text('props.href', '', EGroup.OTHER);
  const target = text('props.target', '', EGroup.OTHER);
  const spm = text('props.spm', '', EGroup.OTHER);
  const component = select<'button' | 'a' | 'span' | 'div' | undefined>('props.component', ['button', 'a', 'span', 'div'], undefined, EGroup.OTHER);
  
  const props = useMemo(() => omitUndefined({
    component,
    label,
    title,
    iconLeft,
    iconRight,
    iconSpacing,
    href,
    target,
    spm,
    theme,
    size,
    block,
    ellipsis,
    loading,
    active,
    disabled
  }), [
    component,
    label,
    title,
    iconLeft,
    iconRight,
    iconSpacing,
    href,
    target,
    spm,
    theme,
    size,
    block,
    ellipsis,
    loading,
    active,
    disabled
  ]);
  
  useEffect(() => onChange(props), [onChange, props]);
  
  return null;
}
