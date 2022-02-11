import React from 'react';

import Button, {
  ButtonTheme,
  ButtonSize
} from '@alicloud/console-base-rc-button';

import intl from '../../../intl';
import {
  useTheme,
  usePage,
  usePages,
  useNoText,
  useHandlePagePrev,
  useHandlePageNext
} from '../../../model';

interface IProps {
  prev?: boolean;
}

export default function ButtonPrevNext({
  prev
}: IProps): JSX.Element {
  const theme = useTheme();
  const page = usePage();
  const pages = usePages();
  const noText = useNoText();
  const handlePagePrev = useHandlePagePrev();
  const handlePageNext = useHandlePageNext();
  
  const simplest = theme === 'simplest';
  const buttonTheme = simplest ? ButtonTheme.TEXT_TERTIARY : ButtonTheme.TERTIARY;
  const buttonSize = simplest ? ButtonSize.NONE : ButtonSize.S;
  const title = intl(prev ? 'page:prev' : 'page:next');
  
  return <Button {...{
    spm: prev ? 'prev' : 'next',
    theme: buttonTheme,
    size: buttonSize,
    label: noText || simplest ? undefined : title,
    title,
    [prev ? 'iconLeft' : 'iconRight']: prev ? 'angle-left' : 'angle-right',
    iconSpacing: 'small',
    disabled: prev ? page <= 1 : page >= pages,
    onClick: prev ? handlePagePrev : handlePageNext
  }} />;
}
