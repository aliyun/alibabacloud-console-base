@alicloud/console-base-rc-markdown
===

带样式的 markdown 展示，基于 [react-markdown] 并支持 GFM 模式（通过 [remark-gfm] 插件）。

# 使用

```typescript jsx
import Markdown from '@alicloud/console-base-rc-markdown';

<Markdown>字符串</Markdown>
```

# 注意

由于 react-markdown → unified → is-plain-obj 中的 is-plain-obj 仅输出 ES6 的语法，将导致 IE 下语法错误，解决的办法是 webpack 配置如下：

```ts
// webpack.config.base.ts
exports default {
  ...,
  module: {
    ...,
    rules: [
      ...,
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] // 不加就不编译..
          }
        }],
        include(filename: string): boolean {
          // react-markdown → unified → is-plain-obj
          return /node_modules\/.*is-plain-obj.*\.js$/.test(filename);
        }
      },
      ...
    ],
    ...
  }
};
```

[react-markdown]: https://github.com/remarkjs/react-markdown
[remark-gfm]: https://github.com/remarkjs/remark-gfm
