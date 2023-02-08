# @alicloud/react-hook-controllable

「可受控」组件 HOOK，跟值及回调在组件的 props 中的名称没有关系。

```typescript
import {
  useControllable,
  useControllableWithDefault,
  useControllableSoftTrim
} from '@alicloud/react-hook-controllable';
```

* `useControllable` 受控组件 hook，适用任何类型，得到的值有可能是 `undefined`
* `useControllableWithDefault` 受控组件 hook，适用任何类型，一般不会得到 `undefined` 值
* `useControllableSoftTrim` 受控且软 trim 组件 hook，仅针对 `string` 类型

## Why

往往我们在实现受控组件的时候，需要考虑的量有：

* `state.xx`
* `props.xx`
* `props.defaulXx`
* `props.onXxChange`

Hook `useControllableWithDefault` 可以把这些变数进行优雅整合，避免写可受控组件的场景下遇到的不可受控（比如 `props` 变化未反应到界面的问题）和代码冗余问题。

注意：Hook `useControllableWithDefault` 跟需要受控的值在 props 中的名称无关，也可以实现 `visible` 的受控：

* `state.visible`
* `props.visible`
* `props.defaulVisible`
* `props.onVisibleChange`

另外，对于字符串类型的输入，在输入的时候直接 `trim` 是非常不好的体验，因为那会让用户输入不了任何形式的空白字符，所以这里提供了 `useControllableSoftTrim` 来解决此类问题。

## 利用 `useControllableWithDefault` 实现一个「可受控」组件

```typescript tsx
import React from 'react';

import useControllableWithDefault from '@alicloud/react-hook-controllable';

interface IPropsMyInput {
  // other props maybe
  value?: ValueType;
  defaultValue?: ValueType;
  onChange?(value: ValueType): void;
}

const FINAL_DEFAULT: ValueType = xx;

export default function MyInput({
  value,
  defaultValue,
  onChange,
  ...props
}: IPropsMyInput) {
  const [controllableValue, setControllableValue] = useControllableWithDefault<ValueType>(FINAL_DEFAULT, value, defaultValue, onChange);
  
  return <OriginalInput {...{
    ...props,
    value: controllableValue,
    onChange: setControllableValue
  }} />
}
```

## 利用 `useControllableSoftTrim` 实现软 trim

```typescript tsx
import React, {
  HTMLAttributes
} from 'react';

import {
  useControllableSoftTrim
} from '@alicloud/react-hook-controllable';

interface IPropsMyInput extends HTMLAttributes<HTMLInputElement> {
  trim?: boolean;
}

export default function MyInput({
  trim,
  value,
  defaultValue,
  onChange,
  ...props
}: IPropsMyInput) {
  const [controllableValue, setControllableValue] = useControllableSoftTrim(trim, value, defaultValue, onChange);
  
  return <input {...{
    ...props,
    value: controllableValue,
    onChange: setControllableValue
  }} />
}
```

这样，在敲空格的时候，是不会触发 `onChange` 的。
