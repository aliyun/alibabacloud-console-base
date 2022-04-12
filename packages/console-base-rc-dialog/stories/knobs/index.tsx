import {
  useMemo,
  useEffect
} from 'react';
import {
  text,
  boolean,
  array,
  number,
  optionsKnob
} from '@storybook/addon-knobs';

import {
  DialogMode,
  DialogSize,
  DialogProps
} from '../../src';

interface IProps {
  onChange(props: Partial<DialogProps>): void;
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

function omitUndefined(o: any): Partial<DialogProps> {
  const props = {} as any;
  
  for (const k in o) {
    // eslint-disable-next-line no-prototype-builtins
    if (o.hasOwnProperty(k) && o[k] !== undefined) {
      props[k] = o[k];
    }
  }
  
  return props as Partial<DialogProps>;
}

export default function Knobs({
  onChange
}: IProps): null {
  const title = text('title', 'this is a title');
  const titleExtra = text('titleExtra', '');
  const content = text('content', 'this is content which can be JSX.Element or anything legal');
  const buttons = array('buttons', ['yes', 'no']);
  const mode = optional<DialogMode>({
    value: optionsKnob<DialogMode>('props.mode', DialogMode, DialogMode.SLIDE, {
      display: 'inline-radio'
    }),
    inUse: boolean('启用 props.mode', false)
  });
  const size = optional<DialogSize>({
    value: optionsKnob<DialogSize>('props.size', DialogSize, DialogSize.M, {
      display: 'inline-radio'
    }),
    inUse: boolean('启用 props.size', false)
  });
  const backdrop = boolean('backdrop', true);
  const closable = boolean('closable', true);
  const esc = boolean('esc', true);
  const externalClose = boolean('externalClose', false);
  const zIndex = optional<number>({
    value: number('props.zIndex', 1234),
    inUse: boolean('启用 props.zIndex', false)
  });
  const zIndexBackdrop = optional<number>({
    value: number('props.zIndexBackdrop', 800),
    inUse: boolean('启用 props.zIndexBackdrop', false)
  });
  
  const props = useMemo(() => omitUndefined({
    title,
    titleExtra,
    content,
    buttons,
    mode,
    size,
    backdrop,
    closable,
    esc,
    externalClose,
    zIndex,
    zIndexBackdrop
  }), [
    title,
    titleExtra,
    content,
    buttons,
    mode,
    size,
    backdrop,
    closable,
    esc,
    externalClose,
    zIndex,
    zIndexBackdrop
  ]);
  
  useEffect(() => onChange(props), [onChange, props]);
  
  return null;
}
