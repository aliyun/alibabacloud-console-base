export default function getCleanLocationSearch(): string {
  try { // 神奇的事情，有报错说 window.location.search 是 undefined
    return window.location.search.replace('?', '&') // 保证下一个正则不会误伤
        .replace(/&(?:spm|scm|accounttraceid)=[^&]+/g, '') // 剔除 spm、scm、accounttraceid 等非应用参数
        .replace(/^&+/, ''); // 去掉起首的 &，让 search 更纯粹
  } catch (err) {
    return window.location.search || '';
  }
}
