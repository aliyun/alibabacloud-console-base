import React from 'react';

import {
  Button
} from '@alicloud/demo-rc-elements';

import {
  slide,
  open,
  alert,
  confirm
} from '../../../../src';

export default function DialogContent(): JSX.Element {
  return <>
    <Button {...{
      onClick: () => open()
    }}>open</Button>
    <Button {...{
      onClick: () => open({
        backdrop: false
      })
    }}>backdrop: false</Button>
    <Button {...{
      onClick: () => slide()
    }}>slide</Button>
    <Button {...{
      onClick: () => alert('yay')
    }}>alert</Button>
    <Button {...{
      onClick: () => confirm('right?')
    }}>confirm</Button>
  </>;
}
