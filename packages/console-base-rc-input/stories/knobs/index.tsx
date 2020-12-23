import {
  useMemo,
  useEffect
} from 'react';
import {
  text,
  boolean
} from '@storybook/addon-knobs';

import {
  InputProps
} from '../../src';

interface IProps {
  onChange(props: InputProps): void;
}

export default function Knobs({
  onChange
}: IProps): null {
  const placeholder = text('props.placeholder', '');
  const disabled = boolean('props.disabled', false);
  const block = boolean('props.block', false);
  const round = boolean('props.round', false);
  const weakFocusStyle = boolean('props.weakFocusStyle', false);
  const borderless = boolean('props.borderless', false);
  const innerLeft = text('props.innerLeft', '');
  const innerRight = text('props.innerRight', '');
  
  const props = useMemo(() => ({
    placeholder,
    disabled,
    block,
    round,
    weakFocusStyle,
    borderless,
    innerLeft,
    innerRight
  }), [
    placeholder,
    disabled,
    block,
    round,
    weakFocusStyle,
    borderless,
    innerLeft,
    innerRight
  ]);
  
  useEffect(() => onChange(props), [onChange, props]);
  
  return null;
}
