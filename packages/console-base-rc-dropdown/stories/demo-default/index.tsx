import React, {
  useState
} from 'react';
import styled from 'styled-components';

import {
  PropsNCode
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';

import Dropdown, {
  DropdownProps
} from '../../src';

const ScTriggerJsx = styled.div`
  padding: 8px;
  background: #ff0;
  color: #f00;
`;

const dropdownProps: DropdownProps = {
  trigger: 'this is trigger',
  header: 'header',
  body: 'this is body',
  footer: 'footer'
};

const DEFAULT_PROPS: Record<string, unknown> = {
  '/triggerAsJsx': true,
  ...dropdownProps,
  '/align': 'right', // 'left' | 'right'
  '/width': 300, // number | string
  '/minWidth': 200, // number | string
  '/maxWidth': 400, // number | string
  '/zIndex': 1234, // number
  '/offset': [20, 20],
  '/headerBg': true,
  '/headerDivider': true,
  '/headerPadding': 'bottom', // 'both' | 'top' | 'bottom' | 'none'
  '/bodyPadding': 'top', // 'both' | 'top' | 'bottom' | 'none'
  '/footerBg': true,
  '/footerDivider': true,
  '/footerPadding': 'top', // 'both' | 'top' | 'bottom' | 'none'
  '/dropContainer': 'body', // 'inside' | 'body'
  '/block': true,
  '/disabled': true,
  '/visible': false
};

function processProps(props: DropdownProps, o0: Record<string, unknown>): void {
  const trigger: string = o0.trigger as string || 'trigger is a must';
  
  props.trigger = o0.triggerAsJsx ? <ScTriggerJsx>{trigger}</ScTriggerJsx> : trigger;
}

export default function DemoDefault(): JSX.Element {
  const [stateProps, setStateProps] = useState<DropdownProps>(dropdownProps);
  
  return <>
    <ThemeSwitcher />
    <div>
      This text is to make the dropdown not stick to the left of the window. → <Dropdown {...{
        ...stateProps
      }} />
    </div>
    <PropsNCode<DropdownProps> {...{
      componentName: 'Dropdown',
      componentPropsName: 'DropdownProps',
      componentPackageName: '@alicloud/console-base-rc-dropdown',
      defaultProps: DEFAULT_PROPS,
      processProps,
      onChange: setStateProps
    }} />
  </>;
}
