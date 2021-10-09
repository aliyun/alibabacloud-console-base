import React from 'react';

import {
  IProps
} from '../types';

import MergingTest from './merging-test';
import ChooseNTest from './chose-n-test';

export default function DemoHelperErrorPrompt({
  onPrompt
}: IProps): JSX.Element {
  return <>
    <MergingTest onPrompt={onPrompt} />
    <ChooseNTest onPrompt={onPrompt} />
  </>;
}
