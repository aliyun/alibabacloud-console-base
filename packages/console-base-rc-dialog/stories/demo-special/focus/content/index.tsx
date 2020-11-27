import React from 'react';

import {
  P,
  Button
} from '@alicloud/demo-rc-elements';

import {
  open,
  useDialog
} from '../../../../src';

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
  
  return <div>
    <P>
      内容中有 <a href="//www.aliyun.com">链接</a>、<input type="radio" />、<input type="checkbox" />、<input type="number" />、<button>按钮</button>、<textarea placeholder="textarea" />、<input type="text" />、<select>
        <option value="">nothing</option>
      </select>、<input type="color" />、<input type="search" />，等元素。
    </P>
    <P>也有 <strong tabIndex={0}>带 tabIndex</strong> 的元素。</P>
    <P>默认表单输入元素优先得到焦点。</P>
    <P>
      当前 Dialog 会打开另外一个 Dialog，要保证另外一个 Dialog 消失后，当前 Dialog 可以自动获得焦点。
      <Button onClick={openAnother}>open another</Button>
    </P>
    <Button onClick={focus}>重置焦点（可用于当内容组件异步产生变化之后）</Button>
  </div>;
}
