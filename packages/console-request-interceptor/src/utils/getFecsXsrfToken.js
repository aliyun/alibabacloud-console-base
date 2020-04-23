import docCookies from './docCookies'

const COOKIE_NAME = 'FECS-XSRF-TOKEN'
export default function getFecsXsrfToken() {
  return docCookies.getItem(COOKIE_NAME)
}
