import getCookieItem from './getCookieItem'

// 控制台存储 region 的 cookie 名称
const REGION_COOKIE_NAME = 'currentRegionId'
export default function getActiveRegionId() {
  return getCookieItem(REGION_COOKIE_NAME)
}
