import React from 'react';

import Icon from '@alicloud/console-base-rc-icon';

import {
  SidePanelItem
} from '../../../../src';
import ContactTooltip from '../../contact-tooltip';

export default function Contact(): JSX.Element {
  return <SidePanelItem {...{
    title: '联系我们',
    icon: <Icon type="toolkit-contact" />,
    tooltip: <ContactTooltip />,
    tooltipAlign: 'bottom'
  }} />;
}
