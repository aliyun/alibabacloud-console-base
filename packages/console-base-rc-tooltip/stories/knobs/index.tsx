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
  TooltipProps,
  TooltipPlacement,
  TooltipTheme
} from '../../src';

interface IKnobProps extends TooltipProps {
  config?: boolean;
  close?: boolean;
}

interface IProps {
  onChange(props: IKnobProps): void;
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

function omitUndefined(o: any): IKnobProps {
  const props = {} as any;
  
  for (const k in o) {
    // eslint-disable-next-line no-prototype-builtins
    if (o.hasOwnProperty(k) && o[k] !== undefined) {
      props[k] = o[k];
    }
  }
  
  return props as IKnobProps;
}

export default function Knobs({
  onChange
}: IProps): null {
  const title = text('props.title', 'Tooltip Title');
  const content = text('props.content', 'Tooltip content - must');
  const theme = optional<TooltipTheme>({
    value: optionsKnob<TooltipTheme>('props.theme', TooltipTheme, TooltipTheme.NORMAL, {
      display: 'inline-radio'
    }),
    inUse: boolean('启用 props.theme', true)
  });
  const placement = optional<TooltipPlacement>({
    value: optionsKnob<TooltipPlacement>('props.placement', TooltipPlacement, TooltipPlacement.TOP, {
      display: 'inline-radio'
    }),
    inUse: boolean('启用 props.placement', true)
  });
  const arrow = boolean('props.arrow', true);
  const config = boolean('+ onConfig', false);
  const close = boolean('+ onClose', false);
  
  const props = useMemo(() => omitUndefined({
    title,
    content,
    theme,
    placement,
    arrow,
    config,
    close
  }), [
    title,
    content,
    theme,
    placement,
    arrow,
    config,
    close
  ]);
  
  useEffect(() => onChange(props), [onChange, props]);
  
  return null;
}

export type {
  IKnobProps as KnobProps
};
