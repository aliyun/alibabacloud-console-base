# @alicloud/rc-codemirror

CodeMirror 5 的 React 封装，适用于极简的场景。

预加载以下样式：

* `codemirror/lib/codemirror.css`
* `codemirror/display/fullscreen.css`
* `codemirror/theme/mdn-like.css`
* `codemirror/theme/mdn-like.css`
* `codemirror/addon/fold/foldgutter.css`
* `codemirror/addon/dialog/dialog.css`
* `codemirror/addon/search/matchesonscrollbar.css`
* `codemirror/addon/lint/lint.css`

预加载以下 mode：

* `codemirror/mode/javascript/javascript` 支持如下 `conf.mode`
  + `text/javascript`
  + `text/ecmascript`
  + `application/javascript`
  + `application/x-javascript`
  + `application/ecmascript`
  + `application/json`
  + `application/x-json`
  + `application/manifest+json`
  + `application/ld+json`
  + `text/typescript`
  + `application/typescript`
* `codemirror/mode/css/css` 支持如下 `conf.mode`
  + `text/css`
  + `text/x-scss`
  + `text/x-less`
  + `text/x-gss`
* `codemirror/mode/htmlmixed/htmlmixed` 支持如下 `conf.mode`
  + `text/markdown`
  + `text/x-markdown`

预加载以下插件：

* `codemirror/addon/lint/lint`
* `codemirror/addon/selection/active-line`
* `codemirror/addon/fold/foldcode`
* `codemirror/addon/fold/foldgutter`
* `codemirror/addon/fold/brace-fold`
* `codemirror/addon/fold/indent-fold`
* `codemirror/addon/edit/matchbrackets`
* `codemirror/addon/edit/closebrackets`
* `codemirror/addon/edit/closetag`
* `codemirror/addon/dialog/dialog`
* `codemirror/addon/search/search`
* `codemirror/addon/search/searchcursor`
* `codemirror/addon/search/jump-to-line`
* `codemirror/addon/search/matchesonscrollbar`

其他需要的可以在自己的应用下进行二次封装。
