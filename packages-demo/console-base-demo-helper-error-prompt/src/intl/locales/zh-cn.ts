export default {
  'fake_log_in:title': '模拟登录',
  'fake_log_in:message!html!lines': `正常登录只需要 <code>window.location.reload()</code> 即可，这里为了 demo 效果，假装了一个无刷登录。
<em>注意</em>：这也意味着使用了它的 errorPrompt 调用将无法被 proxy，因为 function 无法被 postMessage 序列化。`
};
