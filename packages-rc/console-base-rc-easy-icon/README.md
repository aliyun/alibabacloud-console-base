# @alicloud/console-base-rc-easy-icon

> ConsoleBase 组件 - 方便渲染 Icon，适用于将配置项转成图标的场景

适用于将静态配置项（svg、url、base64、className）渲染成组件

| 场景        | `props.icon`     | 生成           |
|-----------|------------------|--------------|
| SVG 代码    | `<svg>...</svg>` | `span + svg` |
| 图片 URL    | `https://xx`     | `img`        |
| Base64    | `data:image`     | `img`        |
| className | `{ className }`  | `i`          |
| JSX       | JSX              | JSX          |
| 其他        | 不在以上             | `<>字符串</>`   |

注意：生成的节点大小需使用者使用 tag 选择器控制。
