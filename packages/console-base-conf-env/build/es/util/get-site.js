import { getCookie } from '@alicloud/cookie';
export default function getSite() {
  return getCookie('aliyun_site') || 'CN'; // CN INTL JP
}