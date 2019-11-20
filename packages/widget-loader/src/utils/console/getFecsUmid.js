import docCookies from './docCookies'

// csrf token
const FECS_UMID = 'FFECS-UMID'
export default function getFecsUmid() {
  return docCookies.getItem(FECS_UMID)
}
