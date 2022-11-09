# @alicloud/stylelint-config

改编自 [stylelint-config-palantir]。

* [stylelint plugins]
* [stylelint rules]

## INSTALL

```shell
tnpm i -D stylelint @alicloud/stylelint-config
```

## Usage

### 仅 LESS / SASS / CSS

在你的项目根目录下新建 `.stylelintrc`，内容如下：

```json
{
  "extends": [
    "@alicloud/stylelint-config"
  ]
}
```

在 `package.json` 里的 `"scripts"` 里添加 `lint:style` 命令（可以根据项目自身特性对后缀进行裁剪）：

```json
{
  "scripts": {
    "lint:style": "stylelint \"src/**/*.{less,css,sass,scss}\""
  }
}
```

在项目根目录下执行 `yarn lint:style` 或 `npm run lint:style` 查看结果。

### 使用 styled-components

如果你的项目使用了 [styled-components]，这里也提供了对应的配置：

`.stylelintrc`

```json
{
  "extends": [
    "@alicloud/stylelint-config/sc"
  ]
}
```

`package.json#scripts`

```json
{
  "scripts": {
    "lint:sc": "stylelint \"src/**/*.{js,jsx,ts,tsx}\""
  }
}
```

注意：目前 [stylelint-processor-styled-components 不能处理传统的样式文件](https://github.com/styled-components/stylelint-processor-styled-components/issues/187)，所以，
如果你的项目既有 [styled-components]，又有传统的样式文件，那么你可能需要两个 `stylelintrc`，并且其中一个只能用在命令行（不能被 IDE 感知）。

这样，你可能需要修改一下你的 `scripts`：

`package.json#scripts`

```json
{
  "scripts": {
    "lint:style": "npm run lint:css && npm run lint:sc",
    "lint:sc": "stylelint \"src/**/*.{js,jsx,ts,tsx}\"",
    "lint:css": "stylelint \"src/**/*.{less,css,sass,scss}\" --config .stylelintrc-css"
  }
}
```

`.stylelintrc-css` 文件内容和未使用 `[styled-components]` 的 lint 配置保持一致。

## IDE Support

* [VsCode](https://github.com/shinnn/vscode-stylelint)
* [WebStorm](https://www.jetbrains.com/help/webstorm/using-stylelint-code-quality-tool.html)

[stylelint-config-palantir]: https://github.com/palantir/stylelint-config-palantir
[stylelint plugins]: https://stylelint.io/user-guide/plugins/
[stylelint rules]: https://stylelint.io/user-guide/rules/
[styled-components]: https://www.styled-components.com/
