@alicloud/storage-factory
===

# WHY

一个应用最好有自己的一个 storage 的主 key 作为其统一的 namespace 对 storage 下的字段进行管理，有如下好处：

- 避免 localStorage / sessionStorage 的泛滥
- 避免应用内取名冲突
- 可以存取各种类型的数据，而不是需要转换过才能用的字符串
- 不必担心出错

# API

这是一个工厂方法，生产一个方法：

```js
import storageFactory from '@alicloud/storage-factory';

export default storageFactory(`${app_name}@${user_id}`); // 最好能跟登录用户挂钩，默认用的是 locationStorage

// 如果还需要 sessionStorage 的操作，可以这样：
export const session = storageFactory(`${app_name}@${user_id}`, true);
```

工厂方法生产出来的方法是多态的：

```typescript
// 获取全部，没有什么实际意义，只在 debug 时可以用
function storage(): Record<string, unknown>;

// 获取 key 对应的值
export interface IFnStorageGetter {
  <T = string>(key: string): T;
}

// 删除 key 对应的值
export interface IFnStorageClearer {
  (key: string, value: null): void;
}

// 设置 key 对应的值
export interface IFnStorageSetter {
  <T = string>(key: string, value: T): void;
}
```

# EXAMPLE

1. 在应用下生产「唯一」的 storage 模块，比如 `util/storage.js`

```js
import storageFactory from '@alicloud/storage-factory';

export default storageFactory(`${app_name}@${user_id}`); // 最好能跟登录用户挂钩，默认用的是 locationStorage

// 如果还需要 sessionStorage 的操作，可以这样：
export const session = storageFactory(`${app_name}@${user_id}`, true);
```

2. 使用

```js
import storage from ':util/storage';

storage(); // 获取全部，没有什么实际意义
storage(key); // 获取某个值
storage(key, val); // 设置某值
storage(key, null); // 清除某值
```
