/* eslint-disable */
export default function getCookieItem(sKey) {
  return decodeURIComponent(
    document.cookie.replace(
      new RegExp(
        '(?:(?:^|.*;)\\s*' +
          encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') +
          '\\s*\\=\\s*([^;]*).*$)|^.*$'
      ),
      '$1'
    )
  )
}
