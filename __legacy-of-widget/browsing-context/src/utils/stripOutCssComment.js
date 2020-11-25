export default function stripOutCssComment(cssText = '') {
  const pattern = /\/\*(\*(?!\/)|[^*])*\*\//g
  return cssText.replace(pattern, '')
}
