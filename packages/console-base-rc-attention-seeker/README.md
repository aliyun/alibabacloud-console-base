@alicloud/console-base-rc-attention-seeker
===

# Usage

建议对需要提示用户关注组件单独写一个组件，注意 ref 必须是 HTML 元素。

```typescript tsx
import React, {
  useRef,
  useEffect
} from 'react';

import {
  put
} from '@alicloud/console-base-rc-attention-seeker';

export default function PickMe(): JSX.Element {
  const refSpan = useRef<HTMLSpanElement | null>(null);
  
  useEffect(() => {
    if (refSpan.current) {
      return put(refSpan.current);
    }
  }, []);
  
  return <span ref={refSpan}>and i will get the attention</span>;
}
```
