import getCookieItem from './getCookieItem'

const COOKIE_NAME = 'FECS-UMID'
export default function getFecsUmid() {
  return getCookieItem(COOKIE_NAME)
}
