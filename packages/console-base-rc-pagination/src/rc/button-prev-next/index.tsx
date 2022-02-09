import React from 'react';

import Button, {
  ButtonTheme,
  ButtonSize,
  ButtonProps
} from '@alicloud/console-base-rc-button';

import intl from '../../intl';

interface IProps extends Omit<ButtonProps, 'spm' | 'label' | 'theme' | 'size'> {
  simplest?: boolean;
  prev?: boolean;
}

export default function ButtonPrevNext({
  simplest,
  prev,
  ...props
}: IProps): JSX.Element {
  const buttonTheme = simplest ? ButtonTheme.TEXT_TERTIARY : ButtonTheme.TERTIARY;
  const buttonSize = simplest ? ButtonSize.NONE : ButtonSize.S;
  const title = intl(prev ? 'page:prev' : 'page:next');
  
  return <Button {...{
    spm: prev ? 'prev' : 'next',
    theme: buttonTheme,
    size: buttonSize,
    label: simplest ? undefined : title,
    title,
    [prev ? 'iconLeft' : 'iconRight']: prev ? 'angle-left' : 'angle-right',
    iconSpacing: 'small',
    ...props
  }} />;
}
