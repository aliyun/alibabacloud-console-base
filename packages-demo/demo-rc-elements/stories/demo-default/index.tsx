import React from 'react';

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Hr
} from '../../src';
import Shared from '../_shared';

export default function DemoDefault(): JSX.Element {
  return <>
    <Shared />
    <Hr />
    <H1>H1</H1>
    <H2>H2</H2>
    <H3>H3</H3>
    <H4>H4</H4>
    <H5>H5</H5>
    <H6>H6</H6>
  </>;
}
