@alicloud/post-message
===

封装 postMessage 相关，有可以将 postMessage 转化成 Promise 的方法。

注意：需要使用者自己保证 Promise。

# INSTALL

```
npm i @alicloud/post-message -S
```

# USAGE

```typescript
import {
  broadcast,
  broadcastInParent,
  broadcastPromise,
  subscribe,
  subscribeOnce,
  subscribePromise,
  unsubscribe,
  unsubscribeOnce
} from '@alicloud/post-message';

// 广播事件
broadcast<T>(message, payload); // 这里 T 是 __payload__ 的类型定义

// 接收事件
function receiver(payload: T) {
  // do sth.
}

const unsubscribe = subscribe<T>(message, receiver); // 适时地使用 unsubscribe 注销
```

# API

```typescript
/**
 * 广播消息
 */
function broadcast<P = void>(type: string, payload?: P, targetOrigin?: string): void;

/**
 * 去父窗口进行广播
 */
function broadcastInParent<P = void>(type: string, payload?: P, targetOrigin?: string): void;

/**
 * 广播事件，返回 Promise，必须要有 subscribePromise 来承接该事件，否则此 Promise 将永远无法结束
 */
function broadcastPromise<T = void, P = void>(type: string, payload: P): Promise<T>;

/**
 * 注册回调，返回可用于反注册的方法
 */
function subscribe<P = void>(type: string, fn: (payload?: P) => void): () => void;

/**
 * 注册单次回调，运行一次后将自动移除
 */
function subscribeOnce<P = void>(type: string, fn: (payload?: P) => void): () => void;

/**
 * 对 broadcastPromise 对应的 type 进行响应，这里关心的 payload 还是 broadcastPromise 所传入的 payload
 */
function subscribePromise<T = void, P = void>(type: string, fn: (payload: P) => Promise<T>): () => void;

/**
 * 反注册对 type 的某一回调，一般推荐用 subscribe 的返回
 */
function unsubscribe(type: string, fn: Function): void;

/**
 * 反注册对 type 的某一单次回调（有必要的场景）
 */
function unsubscribeOnce(type: string, fn: Function): void;
```

> 关于 `unsubscribe`，一般情况下，你不需要手动调用，可以直接使用 `subscribe` 返回的无参方法即可。

## 使用 hook 的例子

```typescript jsx
import {
  useEffect
} from 'react';

import {
  broadcast,
  subscribe
} from '@alicloud/post-message';

function SomeComponent(): JSX.Element {
  useEffect(() => {
     // 返回的 unsubscribe 方法会在适当的实际进行反注销
    return subscribe(_SOME_MESSAGE_TYPE_ENUM_, () => {
      // ... do sth
    });
  }, []);
  
  return <></>;
}
```

## 使用 class 的例子

```typescript jsx
import {
  Component
} from 'react';

import {
  broadcast,
  subscribe
} from '@alicloud/post-message';

class SomeComponent extends Component {
  _unsubscribe?: () => void;
  
  componentDidMount(): void {
    this._unsubscribe = subscribe(_SOME_MESSAGE_TYPE_ENUM_, () => {
      // ... do sth
    });
  }
  
  componentWillUnmount(): void {
    if (this._unsubscribe) {
      this._unsubscribe();
      
      delete this._unsubscribe;
    }
  }
  
  render(): JSX.Element {
    return <></>;
  }
}
```
