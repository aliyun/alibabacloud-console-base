import getCookieItem from './getCookieItem'

function getUid() {
  return getCookieItem('login_aliyunid_pk')
}

export default getUid
