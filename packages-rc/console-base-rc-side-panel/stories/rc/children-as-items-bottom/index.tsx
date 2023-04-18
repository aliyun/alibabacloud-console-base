import React from 'react';

import FaceChanger from './face-changer';
import Contact from './contact';

export default function ChildrenAsItemsBottom(): JSX.Element {
  return <>
    <FaceChanger />
    <Contact />
  </>;
}
