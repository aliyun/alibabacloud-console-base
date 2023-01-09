import React from 'react';

import {
  IDemoHelperRightItemProps
} from '../../types';
import RainbowTextWithTooltip from '../rainbow-text-with-tooltip';

export default function TopNavRightItem(props: IDemoHelperRightItemProps): JSX.Element {
  return <RainbowTextWithTooltip {...{
    ...props,
    tipAlignRight: true
  }} />;
}
