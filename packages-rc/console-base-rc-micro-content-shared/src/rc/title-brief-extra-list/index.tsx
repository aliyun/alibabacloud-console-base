import React from 'react';

import {
  ITitleBriefExtraProps
} from '../../types';

import Item from './item';

export default function TitleBriefExtraList<T extends object>({
  items,
  getKey,
  getUrl,
  getTitle,
  getBrief,
  getExtra,
  onItemClick
}: ITitleBriefExtraProps<T>): JSX.Element {
  return <div>
    {items.map((item, index) => <Item<T> {...{
      key: getKey(item, index),
      item,
      index,
      getUrl,
      getTitle,
      getBrief,
      getExtra,
      onItemClick
    }} />)}
  </div>;
}
