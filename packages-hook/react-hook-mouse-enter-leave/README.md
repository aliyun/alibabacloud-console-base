# @alicloud/react-hook-mouse-enter-leave

## INSTALL

```shell
tnpm i @alicloud/react-hook-mouse-enter-leave -S
```

## Usage

```tsx
import React, {
  useState,
  useCallback
} from 'react';

import useMouseEnterLeave from '@alicloud/react-hook-mouse-enter-leave';

export default function SomeRc(): JSX.Element {
  const [stateHovered, setStateHovered] = useState(false);
  const [handleMouseEnter, handleMouseLeave] = useMouseEnterLeave(
    useCallback(() => setStateHovered(true), [setStateHovered]),
    useCallback(() => setStateHovered(false), [setStateHovered])
  );
  
  return <SomeComponent {...{
    hovered: stateHovered
  }} />;
};
```