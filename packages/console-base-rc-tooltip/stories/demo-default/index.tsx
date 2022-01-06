import React, {
  useState
} from 'react';

import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';

import Tooltip from '../../src';
import Knobs, {
  KnobProps
} from '../knobs';

function onConfig(): void {
  // eslint-disable-next-line no-console
  console.info('fake onConfig');
}

function onClose(): void {
  // eslint-disable-next-line no-console
  console.info('fake onClose');
}

export default function DemoDefault(): JSX.Element {
  const [stateTooltipProps, setStateTooltipProps] = useState<KnobProps>({
    content: ''
  });
  const {
    close,
    config,
    ...tooltipProps
  } = stateTooltipProps;
  
  return <>
    <ThemeSwitcher />
    <Knobs onChange={setStateTooltipProps} />
    <Tooltip {...{
      ...tooltipProps,
      style: {
        top: 120,
        left: 120
      },
      onConfig: config ? onConfig : undefined,
      onClose: close ? onClose : undefined
    }} />
  </>;
}
