关于 CSS Variable 的实践研究
===

* [ConsoleBase](css/console-base.less)
* [XConsole](css/xconsole.less)

# 兼容性

根据 [MDN CSS var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var()) 以及 [CanIUse](https://caniuse.com/css-variables) 的统计，除了 IE 之外，其余的浏览器兼容良好。

# 几个使用了 CSS Variable 的站点

* [Github](https://github.com/)
* [JetBrains Product Documentation](https://www.jetbrains.com/help)
* [精品 Mac 软件下载](https://www.macwk.com)
* [Josh W Comeau'Blog](https://www.joshwcomeau.com)
* [Can I Use](https://caniuse.com)
* [Theme UI](https://theme-ui.com/home)

## Github

### 文件

* [CSS Variables 快照](css/github.less)
* [源的 CSS 文件](https://github.githubassets.com/assets/frameworks-240616ff945e6555bfb782d029c5a2c4.css)

### 切主题

1. 切换 `<html>` 的 `data-color-theme` 属性值 `auto`、`light`、`dark`
2. `auto` 的时候使用的是 media-query [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

### 特点

* 支持无刷新切主题：是
* 支持 IE11：否（整站不支持）
* 变量数
    - 多，非常多
* 命名偏好
    - 语义和色值都有
    - namespace 前缀 - 无
    - 功能前缀 - 有（`--color-scale`、`--color-auto`、`--color-text`、`--color-border`、`--color-icon`、`--color-bg`、`--color-fade-bg`、`--color-state`、`--color-shadow`）
* 色值偏好
    - 多 `rgb`
    - 对每种色值做了 0-9 的 10 个变种
* 其他
    - 变量之间无引用，所以代码上来看，重复比较多
    - 因为有 `auto`，所以用了 media-query，这会要求多写一些代码

## JetBrains Product Documentation

### 文件

* [CSS Variables 快照](css/jb.less)
* [源的 CSS 文件](https://resources.jetbrains.com/storage/help-app/v3/app.css)

### 切主题

1. 为 `<html>` 添加主题 class - `theme-dark`
2. 覆盖 `:root.theme-dark` 中的部分变量

### 特点

* 支持无刷新切主题：是
* 支持 IE11：否（整站不支持，且自动跳转到 Edge 打开）
* 变量数
    - 多
    - 定义得比较散，有很大的重复和覆盖
* 命名偏好
    - 偏语义
    - namespace 前缀 - 有（`--wh`、`--wt`、`--jblogo`）
    - 功能前缀 - 有（`-color`、`-app`、`-header`、`-flow`、`-transition`、`-sidebar`...）
* 色值偏好
    - 用 `rgba` 做背景色
* 其他
    - 比较简单，主要是文本的前景/背景色的变换（跟它的「帮助文档」定位有关）

## 精品 Mac 软件下载

### 文件

* [CSS Variables 快照](css/macwk.less)
* [源的 CSS 文件](https://cdn.macwk.com/client/app.f82db30.css)

### 切主题

1. 为 `<body>` 添加主题 class - `light`、`fugu`、`huyan`、`haitian`、`dark`、`black`
2. 主题 class 定义了全局的颜色
3. 主题 class 定义组件的颜色

### 特点

* 支持无刷新切主题：是
* 支持 IE11：否
* 变量数
    - 少，且几乎通篇没有被用到...感觉要么是构建吃掉了，要么就没用
* 命名偏好
    - 既有视觉命名又有语义命名
    - namespace 前缀 - 无
    - 功能前缀 - 无
* 其他
    - 看起来很简单

## Josh W Comeau'Blog

### 文件

* [CSS Variables 快照](css/jwc.less)
* [源的 CSS 文件](https://www.joshwcomeau.com/_next/static/css/e0f181e590633b6e485d.css)

### 切主题

1. 整个替换 html 上的的 inline style
2. 组件用的是 styled-components，直接消费 CSS Variables

### 特点

* 支持无刷新切主题：是
* 支持 IE11：否
* 变量数
    - 多，主要是颜色
* 命名偏好
    - 偏语义
    - namespace 前缀 - 无
    - 功能前缀 - 有（`--color`、`--syntax`）
* 其他
    - 纯用 CSS Variables，加上 styled-components 的使用，看起来比较高级

## Can I Use

### 文件

* [CSS Variables 快照](css/jwc.less)
* [源的 CSS 文件 - light](https://caniuse.com/css/theme-light.css)
* [源的 CSS 文件 - dark](https://caniuse.com/css/theme-dark.css)

### 切主题

1. `theme-light` 和 `theme-dark` 都已加载
2. 根据选择的 theme 值修改两个 CSS `<link>` 元素的对应属性 `media` 和 `disabled`（`data-media` 应该是默认的 media 值）

theme-default（默认，跟随系统）

```html
<link rel="stylesheet" data-theme="light" href="/css/theme-light.css" media="all" />
<link rel="stylesheet" data-theme="dark" href="/css/theme-dark.css" media="(prefers-color-scheme: dark)" />
```

theme-light

```html
<link rel="stylesheet" data-theme="light" href="/css/theme-light.css" media="all" />
<link rel="stylesheet" data-theme="dark" href="/css/theme-dark.css" media="not all" disabled />
```

theme-dark

```html
<link rel="stylesheet" data-theme="light" href="/css/theme-light.css" media="not all" disabled />
<link rel="stylesheet" data-theme="dark" href="/css/theme-dark.css" media="all" />
```

### 特点

* 支持无刷新切主题：是
* 支持 IE11：否
* 变量数
    - 多，主要是颜色
* 命名偏好
    - 偏语义
    - namespace 前缀 - 无
    - 功能前缀 - 无
    - 喜欢后缀，如 `-fg`、`-bg`
* 其他
    - 利用 `<link>` 元素的 `media` 属性切换主体的形式比较黑科技
    - 在主题上增加了 A11Y 加强的选项值得借鉴

## Theme UI

### 文件

* [CSS Variables 快照](css/themeui.less)

### 切主题

1. 切换主题时，body 上的变量值不变化，但所有涉及到的组件都会重新渲染，`class` 属性发生改变，其 `var(--var, default)` 的默认值发生变化
2. 貌似使用了 [react-helmet](https://www.npmjs.com/package/react-helmet) 和 [polished](https://www.npmjs.com/package/polished)
3. 刷新后，body 上的变量变成跟 theme 对应的值

### 特点

* 支持无刷新切主题：是
* 支持 IE11：部分支持（主背景色不变，组件变化）
* 变量数
    - 少，主要是颜色
* 命名偏好
    - 偏语义
    - namespace 前缀 - 无
    - 功能前缀 - 有（`--theme-ui-colors`）
* 其他
    - 它应该是在顶层容器上有个专门的 Context 做 theme 颜色替换，比较偏重于 JS 来做相关的事情
    - 它同时利用了 [meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color) 对手机端浏览器进行的样式调优

