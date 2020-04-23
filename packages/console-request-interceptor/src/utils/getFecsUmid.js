import docCookies from './docCookies'

const COOKIE_NAME = 'FECS-UMID'
export default function getFecsUmid() {
  return docCookies.getItem(COOKIE_NAME)
}
