import docCookies from './docCookies'

// csrf token
const FECS_XSRF_TOKEN = 'FECS-XSRF-TOKEN'
export default function getFecsSecToken() {
  return docCookies.getItem(FECS_XSRF_TOKEN)
}
