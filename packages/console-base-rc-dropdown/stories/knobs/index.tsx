import {
  useMemo,
  useEffect
} from 'react';
import {
  text,
  select,
  number,
  boolean
} from '@storybook/addon-knobs';

import {
  DropdownProps
} from '../../src';

enum EGroup {
  CONTENT = '内容',
  LOOK = '长相',
  OTHERS = '其他'
}

export interface IKnobsData extends DropdownProps {
  triggerAsJSX?: boolean;
}

interface IProps {
  onChange(o: IKnobsData): void;
}

export default function Knobs({
  onChange
}: IProps): null {
  const trigger = text('props.trigger', 'this is trigger', EGroup.CONTENT) || 'you should always have a trigger';
  const triggerAsJSX = boolean('(none-props) render trigger as JSX', false, EGroup.CONTENT);
  const header = text('props.header', '', EGroup.CONTENT);
  const body = text('props.body', 'this is body', EGroup.CONTENT);
  const footer = text('props.footer', '', EGroup.CONTENT);
  
  const align = select<'left' | 'right'>('props.align', ['left', 'right'], 'left', EGroup.LOOK);
  const bodyPadding = select<'both' | 'top' | 'bottom' | 'none'>('props.bodyPadding', ['both', 'top', 'bottom', 'none'], 'both', EGroup.LOOK);
  const disabled = boolean('props.disabled', false, EGroup.LOOK);
  const width = number('props.width', 0, undefined, EGroup.LOOK);
  const minWidth = number('props.minWidth', 0, undefined, EGroup.LOOK);
  const maxWidth = number('props.maxWidth', 0, undefined, EGroup.LOOK);
  const offsetX = number('props.offset[_, y]', 0, undefined, EGroup.LOOK);
  const offsetY = number('props.offset[x, _]', 0, undefined, EGroup.LOOK);
  const block = boolean('props.block', false, EGroup.LOOK);
  const visible0 = boolean('props.visible', false, EGroup.LOOK);
  const visibleInUse = boolean('启用 props.visible', false, EGroup.LOOK);
  const visible = visibleInUse ? visible0 : undefined;
  const dropContainer0 = select<'inside' | 'body'>('props.dropContainer', ['inside', 'body'], 'body', EGroup.OTHERS);
  const dropContainerInUse = boolean('启用 props.dropContainer', true, EGroup.OTHERS);
  const dropContainer = dropContainerInUse ? dropContainer0 : undefined;
  
  const o: IKnobsData = useMemo(() => ({
    trigger,
    header,
    body,
    footer,
    align,
    bodyPadding,
    disabled,
    width,
    minWidth,
    maxWidth,
    offset: [offsetX, offsetY],
    block,
    dropContainer,
    visible,
    triggerAsJSX
  }), [
    trigger,
    header,
    body,
    footer,
    align,
    bodyPadding,
    disabled,
    width,
    minWidth,
    maxWidth,
    offsetX,
    offsetY,
    block,
    dropContainer,
    visible,
    triggerAsJSX
  ]);
  
  useEffect(() => onChange(o), [onChange, o]);
  
  return null;
}
