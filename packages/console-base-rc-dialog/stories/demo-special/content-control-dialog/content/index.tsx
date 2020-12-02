import React, {
  ChangeEvent,
  useState,
  useCallback
} from 'react';

import {
  H3,
  P,
  Button,
  InputText
} from '@alicloud/demo-rc-elements';

import {
  useDialog
} from '../../../../src';

export default function Demo(): JSX.Element {
  const {
    focus,
    lock,
    unlock,
    close
  } = useDialog();
  const [stateInput, setStateInput] = useState<string>('');
  
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setStateInput(e.target.value), [setStateInput]);
  
  return <>
    <P>内容组件，通过 hook（推荐） <code>useDialog</code> 或 <code>static contextType = DialogContext;</code> 可以控制 Dialog。</P>
    
    <H3>focus()</H3>
    <P>自动获取最佳焦点。适用于内容发生变化之后，需要调整「最佳」焦点的场景（a、input、button 等元素可以获得焦点，input 的优先级高）。</P>
    <Button onClick={() => focus()}>focus()</Button>
    <InputText type="text" placeholder="输入以验证" value={stateInput} onChange={handleInputChange} />
    
    <H3>lock() / unlock()</H3>
    <P>锁住 Dialog，避免其关闭，此时无论鼠标、键盘还是代码调用 <code>close()</code> 都无法将 Dialog 关闭。所以，务必一定执行 <code>unlock()</code>。</P>
    <Button onClick={() => lock()}>lock()</Button>
    <Button onClick={() => lock(true)}>lock(true)</Button>
    <Button onClick={() => unlock()}>unlock()</Button>
    
    <H3>close()</H3>
    <P>关闭 Dialog。</P>
    <Button onClick={() => close()}>close()</Button>
  </>;
}
