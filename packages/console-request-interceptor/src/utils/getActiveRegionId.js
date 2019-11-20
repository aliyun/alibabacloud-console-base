import docCookies from './docCookies'

// 控制台存储 region 的 cookie 名称
const REGION_COOKIE_NAME = 'activeRegionId'
export default function getActiveRegionId() {
  return docCookies.getItem(REGION_COOKIE_NAME)
}
