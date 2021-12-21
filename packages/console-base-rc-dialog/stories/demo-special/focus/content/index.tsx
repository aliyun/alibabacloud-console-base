import React from 'react';
import styled from 'styled-components';

import {
  P,
  Button
} from '@alicloud/demo-rc-elements';
import {
  mixinInputReset,
  mixinInputBg,
  mixinInputBorder,
  mixinInputText,
  mixinInputTextHover,
  mixinInputBgHover,
  mixinInputBorderHover,
  mixinInputTextFocus,
  mixinInputBgFocus,
  mixinInputBorderFocus
} from '@alicloud/console-base-theme';

import {
  open,
  useDialog
} from '../../../../src';

const ScContent = styled.div`
  input[type=text],
  input[type=number],
  input[type=search],
  textarea {
    padding: 4px;
    line-height: 2;
    ${mixinInputReset}
    ${mixinInputText}
    ${mixinInputBg}
    ${mixinInputBorder}
    
    &:hover {
      ${mixinInputTextHover}
      ${mixinInputBgHover}
      ${mixinInputBorderHover}
    }
    
    &:focus {
      ${mixinInputTextFocus}
      ${mixinInputBgFocus}
      ${mixinInputBorderFocus}
    }
  }
`;

function openAnother(): void {
  open({
    title: '另一个 Dialog',
    content: <>
      <input type="text" />
    </>,
    buttons: ['button', 'button 2']
  });
}

export default function Content(): JSX.Element {
  const {
    focus
  } = useDialog();
  
  return <ScContent>
    <div>
      <a href="//www.aliyun.com">链接</a>
      <input type="text" />
      <input type="number" />
      <input type="search" />
      <input type="color" />
      <input type="radio" />
      <input type="checkbox" />
      <textarea placeholder="textarea" />
      <select>
        <option value="">nothing</option>
      </select>
      <button>按钮</button>
    </div>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
    <P>也有 <strong tabIndex={0}>带 tabIndex</strong> 的元素。</P>
    <P>默认表单输入元素优先得到焦点。</P>
    <P>
      当前 Dialog 会打开另外一个 Dialog，要保证另外一个 Dialog 消失后，当前 Dialog 可以自动获得焦点。
      <Button onClick={openAnother}>open another</Button>
    </P>
    <Button onClick={focus}>重置焦点（可用于当内容组件异步产生变化之后）</Button>
  </ScContent>;
}
