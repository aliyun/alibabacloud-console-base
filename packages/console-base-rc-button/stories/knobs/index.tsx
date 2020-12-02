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
  IconType
} from '@alicloud/console-base-rc-icon';

import {
  EButtonSize,
  EButtonThemeColor,
  EButtonThemeColorBg,
  EButtonThemeColorBd,
  EButtonPreset,
  ButtonProps
} from '../../src';

enum EGroup {
  CONTENT = '内容',
  PRESET = 'preset',
  LOOK = '长相',
  THEME = 'Theme',
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
  
  const preset = optional<EButtonPreset>({
    value: optionsKnob<EButtonPreset>('props.preset', EButtonPreset, EButtonPreset.PRIMARY, {
      display: 'inline-radio'
    }, EGroup.PRESET),
    inUse: boolean('启用 props.preset', false, EGroup.PRESET)
  });
  
  const block = optional<boolean>({
    value: boolean('props.block', false, EGroup.LOOK),
    inUse: boolean('启用 props.block', false, EGroup.LOOK)
  });
  const ellipsis = optional<boolean>({
    value: boolean('props.ellipsis', false, EGroup.LOOK),
    inUse: boolean('启用 props.ellipsis', false, EGroup.LOOK)
  });
  const loading = optional<boolean>({
    value: boolean('props.loading', false, EGroup.LOOK),
    inUse: boolean('启用 props.loading', false, EGroup.LOOK)
  });
  const disabled = optional<boolean>({
    value: boolean('props.disabled', false, EGroup.LOOK),
    inUse: boolean('启用 props.disabled', false, EGroup.LOOK)
  });
  const size = optional<EButtonSize>({
    value: select<EButtonSize>('props.size', Object.values(EButtonSize), EButtonSize.NONE, EGroup.LOOK),
    inUse: boolean('启用 props.size', false, EGroup.LOOK)
  });
  const themeColor = optional<EButtonThemeColor>({
    value: select<EButtonThemeColor>('props.themeColor', Object.values(EButtonThemeColor), EButtonThemeColor.NONE, EGroup.THEME),
    inUse: boolean('启用 props.themeColor', false, EGroup.THEME)
  });
  const themeColorHover = optional<EButtonThemeColor>({
    value: select<EButtonThemeColor>('props.themeColorHover', Object.values(EButtonThemeColor), EButtonThemeColor.NONE, EGroup.THEME),
    inUse: boolean('启用 props.themeColorHover', false, EGroup.THEME)
  });
  const themeColorBg = optional<EButtonThemeColorBg>({
    value: select<EButtonThemeColorBg>('props.themeColorBg', Object.values(EButtonThemeColorBg), EButtonThemeColorBg.NONE, EGroup.THEME),
    inUse: boolean('启用 props.themeColorBg', false, EGroup.THEME)
  });
  const themeColorBgHover = optional<EButtonThemeColorBg>({
    value: select<EButtonThemeColorBg>('props.themeColorBgHover', Object.values(EButtonThemeColorBg), EButtonThemeColorBg.NONE, EGroup.THEME),
    inUse: boolean('启用 props.themeColorBgHover', false, EGroup.THEME)
  });
  const themeColorBd = optional<EButtonThemeColorBd>({
    value: select<EButtonThemeColorBd>('props.themeColorBd', Object.values(EButtonThemeColorBd), EButtonThemeColorBd.TRANSPARENT, EGroup.THEME),
    inUse: boolean('启用 props.themeColorBd', false, EGroup.THEME)
  });
  const themeColorBdHover = optional<EButtonThemeColorBd>({
    value: select<EButtonThemeColorBd>('props.themeColorBdHover', Object.values(EButtonThemeColorBd), EButtonThemeColorBd.TRANSPARENT, EGroup.THEME),
    inUse: boolean('启用 props.themeColorBdHover', false, EGroup.THEME)
  });
  
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
    block,
    ellipsis,
    loading,
    disabled,
    size,
    preset,
    themeColor,
    themeColorHover,
    themeColorBg,
    themeColorBgHover,
    themeColorBd,
    themeColorBdHover
  }), [
    component,
    label,
    title,
    iconLeft,
    iconRight,
    href,
    target,
    spm,
    block,
    ellipsis,
    loading,
    disabled,
    size,
    preset,
    themeColor,
    themeColorHover,
    themeColorBg,
    themeColorBgHover,
    themeColorBd,
    themeColorBdHover
  ]);
  
  useEffect(() => onChange(props), [onChange, props]);
  
  return null;
}
