import React from 'react';

import {
  Button
} from '@alicloud/demo-rc-elements';

import {
  useDropdown
} from '../../../src';

export default function TheDrop(): JSX.Element {
  const {
    hideDrop
  } = useDropdown();
  
  return <div>
    <Button onClick={hideDrop}>hideDrop</Button>
  </div>;
}
