# @alicloud/react-hook-with-class

> 利用 MutationObserver 动态监听元素是否有 className

## INSTALL

```shell
tnpm i @alicloud/react-hook-with-class -S
```

## Usage

```tsx
import React, {
  useState,
  useCallback
} from 'react';

import useWithClass from '@alicloud/react-hook-with-class';

export default function SomeRc(): JSX.Element {
  const withClassXx = useWithClass(document.body, 'xx');
  
  console.info(withClassXx);
};
```
