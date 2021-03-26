import React from 'react';

import {
  useProps
} from '../../../../model';

export default function Header(): JSX.Element | null {
  const {
    header
  } = useProps();
  
  return header ? <header>{header}</header> : null;
}
