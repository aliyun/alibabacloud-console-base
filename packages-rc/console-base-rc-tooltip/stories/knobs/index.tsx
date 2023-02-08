import {
  useMemo,
  useEffect
} from 'react';
import {
  text,
  number,
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
  const content = text('props.content', 'Tooltip content - must - Nothing lasts forever, even cold November rain..');
  const theme = optional<TooltipTheme>({
    value: optionsKnob<TooltipTheme>('props.theme', TooltipTheme, TooltipTheme.ACCENT, {
      display: 'inline-radio'
    }),
    inUse: boolean('启用 props.theme', true)
  });
  const placement = optional<TooltipPlacement>({
    value: optionsKnob<TooltipPlacement>('props.placement', TooltipPlacement, TooltipPlacement.TOP_LEFT, {
      display: 'inline-radio'
    }),
    inUse: boolean('启用 props.placement', true)
  });
  const arrow = boolean('props.arrow', true);
  const arrowOffset = number('props.arrowOffset', 0);
  const closable = boolean('props.closable', true);
  const autoClose = boolean('props.autoClose', false);
  const autoCloseKey = text('props.autoCloseKey', 'AUTO_CLOSE_KEY_1');
  const autoCloseCounter = boolean('props.autoCloseCounter', true);
  const config = boolean('+ onConfig', true);
  
  const props = useMemo(() => omitUndefined({
    title,
    content,
    theme,
    placement,
    arrow,
    arrowOffset: arrowOffset > 0 ? arrowOffset : undefined,
    closable,
    autoClose,
    autoCloseKey,
    autoCloseCounter,
    config
  }), [
    title,
    content,
    theme,
    placement,
    arrow,
    arrowOffset,
    closable,
    autoClose,
    autoCloseKey,
    autoCloseCounter,
    config
  ]);
  
  useEffect(() => onChange(props), [onChange, props]);
  
  return null;
}

export type {
  IKnobProps as KnobProps
};
