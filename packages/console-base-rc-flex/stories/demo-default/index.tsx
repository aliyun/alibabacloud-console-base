import React from 'react';
import {
  boolean,
  select
} from '@storybook/addon-knobs';

import Flex, {
  FlexProps
} from '../../src';
import PkgInfo from '../pkg-info';

const ALIGN_ITEMS = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
const JUSTIFY_ITEMS = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];

export default function DemoDefault(): JSX.Element {
  const vertical = boolean('vertical', false);
  const wrapping = boolean('wrapping', false);
  const align = select('align', ALIGN_ITEMS, undefined) as FlexProps['align'];
  const justify = select('justify', JUSTIFY_ITEMS, undefined) as FlexProps['justify'];
  
  return <>
    <PkgInfo />
    <Flex {...{
      vertical,
      wrapping,
      align,
      justify
    }}>
      <div style={{
        background: 'red'
      }}>
        <div>111</div>
      </div>
      <div style={{
        background: 'green'
      }}>
        <div>222</div>
        <div>222</div>
      </div>
      <div style={{
        background: 'blue'
      }}>
        <div>333</div>
        <div>333</div>
        <div>333</div>
      </div>
    </Flex>
  </>;
}
