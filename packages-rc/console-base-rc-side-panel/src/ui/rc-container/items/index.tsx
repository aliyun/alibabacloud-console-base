import React from 'react';

import {
  SidePanelItemPropsWithKey
} from '../../../model';
import {
  DATA_KEY_SIDE_PANEL_ITEM
} from '../../const';
import PanelItem from '../item';

interface IProps {
  items: SidePanelItemPropsWithKey[];
}

export default function Items({
  items
}: IProps): JSX.Element {
  return <>
    {items.map(v => <PanelItem {...{
      [DATA_KEY_SIDE_PANEL_ITEM]: v.key,
      spm: v.key,
      ...v
    }} />)}
  </>;
}
