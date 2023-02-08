import React from 'react';

import {
  IProps
} from '../types';

import MergingTest from './merging-test';
import ChooseToTest from './chose-to-test';

export default function DemoHelperErrorPrompt({
  onPrompt
}: IProps): JSX.Element {
  return <>
    <MergingTest onPrompt={onPrompt} />
    <ChooseToTest onPrompt={onPrompt} />
  </>;
}
