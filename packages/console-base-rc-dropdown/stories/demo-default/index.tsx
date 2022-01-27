import React, {
  useState
} from 'react';
import styled from 'styled-components';
import {
  stringify
} from 'json5';

import {
  H2,
  InputJsonObject,
  Flex,
  CodeViewerJs
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

const DROPDOWN_PROPS: Record<string, unknown> = {
  '/triggerAsJsx': true,
  trigger: 'this is trigger',
  header: 'header',
  body: 'this is body',
  footer: 'footer',
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

function generateCode(regionProps: unknown): string {
  return `import Dropdown, {
  DropdownProps
} from '@alicloud/console-base-rc-dropdown';

const PROPS: DropdownProps = ${stringify(regionProps, (k, v) => {
    if (k.startsWith('/')) {
      return undefined;
    }
    
    return v;
  }, 2)};

export default function MyDropdown(): JSX.Element {
  return <Dropdown {...PROPS} />;
}`;
}

function generateProps(o0: Record<string, unknown>): DropdownProps {
  const o: Record<string, unknown> = {};
  
  Object.keys(o0).forEach(v => {
    if (!v.startsWith('/') && v !== 'triggerAsJSX' && v !== 'trigger') {
      o[v] = o0[v];
    }
  });
  const trigger: string = (o0.trigger as string) || 'trigger is a must';
  
  o.trigger = o0.triggerAsJsx ? <ScTriggerJsx>{trigger}</ScTriggerJsx> : trigger;
  
  return o as unknown as DropdownProps;
}

export default function DemoDefault(): JSX.Element {
  const [stateProps, setStateProps] = useState<Record<string, unknown>>(DROPDOWN_PROPS);
  
  return <>
    <ThemeSwitcher />
    <div>
      This text is to make the dropdown not stick to the left of the window. → <Dropdown {...{
        ...generateProps(stateProps)
      }} />
    </div>
    <Flex ratio={[2, 3]}>
      <>
        <H2>PROPS</H2>
        <InputJsonObject {...{
          value: stateProps,
          onChange: setStateProps
        }} />
      </>
      <>
        <H2>对应的代码</H2>
        <CodeViewerJs>{generateCode(stateProps)}</CodeViewerJs>
      </>
    </Flex>
  </>;
}
