import React from 'react';

import {
  useProps,
  usePage,
  usePages,
  useHandlePageNext
} from '../../../model';
import ButtonPrevNext from '../../../rc/button-prev-next';

export default function ButtonNext(): JSX.Element {
  const {
    theme
  } = useProps();
  const page = usePage();
  const pages = usePages();
  const handlePageNext = useHandlePageNext();
  
  return <ButtonPrevNext {...{
    simplest: theme === 'simplest',
    disabled: page >= pages,
    onClick: handlePageNext
  }} />;
}
