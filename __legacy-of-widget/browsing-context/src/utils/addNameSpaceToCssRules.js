export default function addNameSpaceToCssRules(cssText = '', namespace) {
  if (!namespace) {
    return cssText
  }
  const pattern = /([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)/g
  return cssText.replace(pattern, (match) => {
    // ignore global declaration which with "@" notation
    if (
      // match.startsWith('@font-face') ||
      // match.startsWith('@media') ||
      // match.startsWith('@keyframes') ||
      // match.startsWith('@-webkit-keyframes') ||
      // match.startsWith('@-moz-document') ||
      // match.includes(' @supports') ||
      // go on and on
      match.includes('@')
    ) {
      return match
    }

    // ignore animation progress declaration
    // from and to
    if (/^\s*(from|to)\s*{$/.test(match)) {
      return match
    }
    // percentage
    if (match.includes('%')) {
      return match
    }

    return `.${namespace} ${match}`
  })
}
