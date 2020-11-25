import getCookieItem from './getCookieItem'

const COOKIE_NAME = 'FECS-XSRF-TOKEN'
export default function getFecsXsrfToken() {
  return getCookieItem(COOKIE_NAME)
}
