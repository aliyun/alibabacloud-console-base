# @alicloud/react-hook-is-unmounted

## INSTALL

```shell
tnpm i @alicloud/react-hook-is-unmounted -S
```

## Usage

```typescript jsx
import React, {
  useState,
  useEffect,
  useCallback
} from 'react';

// i would recommend placing all your data calls in a folder, one api per file
import dataSome, { // dataSomeList is some async method returning Promise<IDataSome>
  IDataSome
} from ':/data/some';
import dataOther, { // dataSomeList is some async method returning Promise<IDataSome>
  IDataOther
} from ':/data/other';

import useIsUnmounted from '@alicloud/react-hook-is-unmounted';

export default function SomeRc(): JSX.Element {
  const isUnmounted = useIsUnmounted();
  const [stateDataSome, setStateDataSome] = useState<IDataSome | null>(null);
  const [stateErrorSome, setStateErrorSome] = useState<Error | null>(null);
  const [stateDataOther, setStateDataOther] = useState<IDataOther | null>(null);
  const [stateErrorOther, setStateErrorOther] = useState<Error | null>(null); 
  
  // use in effect directly
  useEffect(() => {
    dataSome().then(data => {
      if (isUnmounted()) {
        return;
      }
      
      setStateDataSome(data);
    }, (err: Error) => {
      if (isUnmounted()) {
        return;
      }
      
      setStateErrorSome(err);
    });
  }, [isUnmounted]);
  // or use as a callback
  const handleGetOther = useCallback(() => {
    dataOther().then(data => {
      if (isUnmounted()) {
        return;
      }
      
      setStateDataOther(data);
    }, (err: Error) => {
      if (isUnmounted()) {
        return;
      }
      
      setStateErrorOther(err);
    });
  }, [isUnmounted]);
  
  return stateDataSome || stateErrorSome ? <div>
    <ResultSome data={stateDataSome} error={stateErrorSome} />
    {stateDataOther || stateErrorOther ? <ResultOther data={stateDataOther} error={stateErrorOther} /> : null}
    <Button onClick={handleGetOther}>get other</Button>
  </div> : <Loading />;
};
```

## 参考

* [use-async-effect]
* [react-is-mounted-hook]

### 为什么不用 [use-async-effect]

[use-async-effect] 仅适用于 effect，且每个 effect 都会去创建对应的逻辑。这是我之前的选择，但当我期望创建一个事件处理函数，在事件处理函数中做异步操作的时候就发现完全不行。

### 为什么不用 [react-is-mounted-hook]

嗯，我一开始是用它，版本 `1.0.3`，但它连最基本的 `useCallback` 都没用，而且它的例子中 `useEffect` 的 `deps` 并没有把 `isMounted` 列入，而我在写代码的时候列入了，结果陷入了死循环。
虽然它有个 [PR](https://github.com/hupe1980/react-is-mounted-hook/pull/1) 在进行中，就是修复这个问题的，不过我等不了了。

### 为什么偏偏叫 isUnmounted 而不是 isMounted

个人觉得是这个 hook 着重点是判断组件被「卸载」，所以.. 而且这样有助于编写符合简单条件优先 return 原则的代码（如以上的例子）。

[use-async-effect]: https://www.npmjs.com/package/use-async-effect
[react-is-mounted-hook]: https://www.npmjs.com/package/react-is-mounted-hook
