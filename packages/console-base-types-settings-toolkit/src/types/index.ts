// 工具的 label 定制属性
export interface ISettingsToolkitItemLabel {
  icon?: 'survey' | 'qr' | 'dingding' | 'edu'; // 预设的图标（问卷、二维码、钉钉），考虑的是特别通用的场景
  html?: string; // 如果字符串或预设 icon 不能适用你的场景，可以自定义 HTML（优先级大于 `text`）
  text?: string; // 纯文字，推荐 4 个以内（有有限的自适应）
}

// 工具的 tooltip 定制属性
export interface ISettingsToolkitItemTooltip {
  html?: string; // 如果字符串或预设 icon 不能适用你的场景，可以自定义 HTML（优先级大于 `text`）
  text?: string; // 纯文字，`tooltip: { light: false, text }` 等价于 `tooltip: string`
  light?: boolean; // 白色背景，默认为黑色背景
  // 由于 DOM 层级的关系，tooltip 的宽度没法自适应（当 content 为文本时）...只好默认不折行；如果展示太宽，
  // 可以设定一个固定的宽度，有固定宽度的将会折行
  width?: number;
  /**
   * 默认可见，注意为避免长期干扰用户，使用者必须打开 closable，并使用 messenger 的 onToolkitTooltipClose 监听关闭事件，在关闭事件中记录用户已关闭并不再继续设置 defaultVisible
   */
  defaultVisible?: boolean;
  closable?: boolean; // 是否可关闭（会添加 X 按钮）
}

export interface ISettingsToolkitItem {
  id: string; // 自定义工具的 ID，必需，否则不展示，且交互时也需要它
  domId?: string; // id 仅用于交互，不会渲染到节点，如果需要渲染到节点，用这个
  label?: string | ISettingsToolkitItemLabel;
  tooltip?: string | ISettingsToolkitItemTooltip;
  mark?: 'new' | 'hot';
  href?: string; // 链接，有的话按钮将默认是一个可导航的外跳链接
  target?: string; // 链接的 target 属性，默认自动对外部链接使用 target="_blank"
  unread?: number; // 「未读数」，将在工具按钮右上角展示一个小红点（点击后清空）
  priority?: number; // 优先级，大的在上方
  doActive?: boolean; // 是否点击之后，按钮保持激活（按下）状态，需要通过 @alicloud/console-base-messenger 进行交互
  active?: boolean; // 是否处于 active 状态，仅在 doActive 的时候有效
  fixed?: boolean; // 是否不可被收起
  [dataName: `data-${string}`]: unknown;
}

export interface ISettingsToolkit {
  api?: Record<string, unknown> | null | boolean; // 展示「API Inspector」，对象表示对此组件的自定义透传
  version?: 'old' | 'new' | null | boolean; // 「返回旧版」或「体验新版」，需要通过 @alicloud/console-base-messenger 自定义对应操作
  customTools?: ISettingsToolkitItem[]; // 自定义工具
}
