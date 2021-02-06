@alicloud/eslint-config
=====================

> 继承 [eslint-config-ali](https://www.npmjs.com/package/eslint-config-ali) 的 eslint 配置。

[如何写你自己的可共享的 eslint config](https://eslint.org/docs/developer-guide/shareable-configs)

除了 eslint，其他的依赖已内置：

* `@typescript-eslint/eslint-plugin`
* `@typescript-eslint/parser`
* `@babel/eslint-parser`
* `eslint-config-ali`
* `eslint-plugin-import`
* `eslint-plugin-jsx-a11y`
* `eslint-plugin-lodash`
* `eslint-plugin-react`
* `eslint-plugin-react-hooks`

# INSTALL

```sh
tnpm i -D eslint @alicloud/eslint-config
```

# USE

## `.eslintrc`

在你的项目根目录下新建 `.eslintrc`，内容如下：

## es5 项目

```json
{
  "extends": [
    "@alicloud/eslint-config/es5"
  ]
}
```

## es6 项目

默认 parser 为 `@babel/eslint-parser` 已安装。

```json
{
  "extends": [
    "@alicloud/eslint-config/es6"
  ]
}
```

## react 项目

默认 parser 为 `@babel/eslint-parser` 已安装。

```json
{
  "extends": [
    "@alicloud/eslint-config/react"
  ]
}
```

## ts / tsx 项目

默认 parser 为 `@typescript-eslint/parser` 已安装。

```json
{
  "extends": [
    "@alicloud/eslint-config/ts"
  ]
}
```

```json
{
  "extends": [
    "@alicloud/eslint-config/tsx"
  ]
}
```

## `.eslintignore`

```ignore
# common

.*/

# generated

build/
coverage/
lib/
dist/
```

## npm script

在 `package.json` 里的 `"scripts"` 里添加 `lint` 命令：

```json
{
  "script": {
    "lint": "eslint src/"
  }
}
```

在项目根目录下执行 `yarn lint` 或 `npm run lint` 查看结果。

# IDE Support

* [VsCode](https://github.com/Microsoft/vscode-eslint)
* [WebStorm](https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_linters_eslint_install_and_configure)
