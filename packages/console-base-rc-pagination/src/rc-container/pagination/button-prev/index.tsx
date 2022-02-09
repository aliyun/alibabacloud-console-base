import React from 'react';

import {
  useProps,
  usePage,
  useHandlePagePrev
} from '../../../model';
import ButtonPrevNext from '../../../rc/button-prev-next';

export default function ButtonPrev(): JSX.Element {
  const {
    theme
  } = useProps();
  const page = usePage();
  const handlePagePrev = useHandlePagePrev();
  
  return <ButtonPrevNext {...{
    simplest: theme === 'simplest',
    prev: true,
    disabled: page <= 1,
    onClick: handlePagePrev
  }} />;
}
