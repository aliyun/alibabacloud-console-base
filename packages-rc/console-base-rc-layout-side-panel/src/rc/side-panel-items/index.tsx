import React from 'react';

import {
  DATA_KEY_SIDE_PANEL_ITEM
} from '../../const';
import {
  SidePanelItemPropsWithKey
} from '../../model';
import SidePanelItem from '../side-panel-item';

interface IProps {
  items: SidePanelItemPropsWithKey[];
}

export default function SidePanelItems({
  items
}: IProps): JSX.Element {
  return <>
    {items.map(v => <SidePanelItem {...{
      [DATA_KEY_SIDE_PANEL_ITEM]: v.key,
      spm: v.key,
      ...v
    }} />)}
  </>;
}