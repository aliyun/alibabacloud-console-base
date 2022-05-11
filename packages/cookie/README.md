# @alicloud/cookie

yet... another 饼干的获取和操作工具

## INSTALL

```shell
tnpm i @alicloud/cookie -S
```

## APIs

## getAllCookies

获取当前页面可以访问到的全部 cookie。

```typescript
function getAllCookies(): object;
```

## getCookie

获取单个 cookie

```typescript
function getCookie(name: string): string | undefined;
```

## setCookie

设置 cookie，设置 cookie，默认为时间为 180 天，设置 extra.days 为 0 可以保存为 session cookie（expires 为空）

```typescript
function setCookie(name: string, value: string, extra: {
  domain?: string; // 默认为当前页面的二级域名，如 `.aliyun.com`，如果是 IP 则为 IP，如 `127.0.0.1`
  path?: string; // 默认 '/'
  days?: number; // 默认 180，传入 `days: 0` 成为 session cookie
  encoding?: boolean; // 默认 true，传入 `false` 可保存原始的值（比如 value 已经经过 base64 编码过）
} = {}): void;
```

## deleteCookie

删除 cookie，其实设置一个过期时间为此刻之前的时间，浏览器会自动清理过期的 cookie

```typescript
function deleteCookie(name: string, extra: {
  domain?: string;
  path?: string;
} = {}): void;
```
