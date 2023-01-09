import React from 'react';

import {
  useItems
  // useFiltering
} from '../../model';
import {
  renderItemOrDividerList
} from '../nav-item-with-sub';

export default function Nav(): JSX.Element {
  const items = useItems();
  // const filtering = useFiltering();

  // return <>
  //   <nav style={{
  //     display: !filtering ? 'block' : 'none'
  //   }}>{renderItemOrDividerList(items)}</nav>
  //   <nav style={{
  //     display: filtering ? 'block' : 'none'
  //   }}>{renderItemOrDividerList(items)}</nav>
  // </>;

  return <nav>{renderItemOrDividerList(items)}</nav>;
}