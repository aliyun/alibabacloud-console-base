import React from 'react';

import Breadcrumb from '../../src';

export default function DemoDefault(): JSX.Element {
  return <Breadcrumb {...{
    items: [{
      label: 'Home',
      href: '/home'
    }, {
      label: 'Fuck',
      href: '/fuck'
    }, {
      label: 'You',
      href: '/you'
    }, {
      label: 'Any Time'
    }]
  }} />;
}
