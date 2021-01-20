import intlFactory from '../src';

const localeZhCN = {
  'demo.op.switch_locale': '切换 locale',
  'hello:world': '你好，世界！',
  'hello:{user}': '你好，{user}！',
  'message!html': '默认，文案中的 HTML 会以文字的形式输出。只需要在 key 的末尾添加 <code>!html</code>，就可以自动渲染 HTML。一般只允许 inline 且有语义的元素：<strong>strong</strong>、<em>em</em>、<code>code</code>、<kbd>kbd</kbd> 和 <a href="#">a（链接或锚点）</a>。',
  'message!html!lines': `国际化既不能断句，也不能 <strong>断章</strong>。
只要你需要在 key 的末尾添加 <code>!lines</code>（可以和 <code>!html</code> 并用），就可以自动按文案的原始换行渲染出 <code>p</code>、<code>ul</code>或 <code>ol</code>。
一行中连续三个以上的 <code>-</code> 可以生成一条 HR（不可有其他字符）
---
无序列表 UL 用 <code>*</code> 开头：
* 无序列表
* 无序列表
有序列表 OL 用 数字加 <code>.</code> 开头：
1. 有序列表
2. 有序列表
过于复杂的 HTML 文案，从设计上就应该杜绝。`
};
const localeEnUS = {
  'demo.op.switch_locale': 'Switch Locale',
  'hello:world': 'Hello, World!',
  'hello:{user}': 'Hello, {user}!',
  'message!html': 'By default, HTML in message will be output as text. If you want your message to render as HTML, all you need to do is putting a <code>!html</code> suffix to the key. Only inline and semantic elements are allowed: <strong>strong</strong>, <em>em</em>, <code>code</code>, <kbd>kbd</kbd> and <a href="#">a (link or anchor)</a>.',
  'message!html!lines': `You shall not break a sentence, and you shall not break a <strong>paragraph</strong> either.
By putting a <code>!lines</code> suffix to the key (can be used alongside <code>!html</code>), your message will be rendered into lines with <code>p</code>, <code>ul</code> and/or <code>ol</code>.
Continuous <code>-</code> in one line will lead to an HR (no other characters)
---
UL (Unordered List) starts with <code>*</code>:
* Unordered List 1
* Unordered List 2
OL (Ordered List) starts with a number and <code>.</code>:
1. Ordered List 1
2. Ordered List 2
As of very complex HTML message, we shall avoid it at design phase.`
};

const intl = intlFactory<typeof localeZhCN>({
  'zh-CN': localeZhCN,
  'en-US': localeEnUS
});

export default intl;

export const {
  intlDate
} = intl;
