/* global describe, it, expect */

import getFromSettings from '../src/util/get-from-settings';
import getFromHostname from '../src/util/get-from-hostname';
import getFromYundunHref from '../src/util/get-from-yundun-href';

import pkgInfo from '../package.json';

describe(pkgInfo.name, () => {
  it('getFromSettings', () => {
    expect(getFromSettings('OSS')).toBe('oss');
    expect(getFromSettings('ossNew')).toBe('oss');
    expect(getFromSettings('ossnExt')).toBe('oss');
    expect(getFromSettings('oss-pre')).toBe('oss');
    expect(getFromSettings('pre-ossnext')).toBe('oss');
    expect(getFromSettings('pre-ossnew')).toBe('oss');
    expect(getFromSettings('pre-ossnew-cn-hangzhou')).toBe('oss');
    expect(getFromSettings('renewnew')).toBe('renew');
    expect(getFromSettings('renewnext')).toBe('renew');
    expect(getFromSettings('renew')).toBe('renew');
    expect(getFromSettings('renew4service')).toBe('renew');
    expect(getFromSettings('renew4bjzwy')).toBe('renew');
    expect(getFromSettings('renew4finance')).toBe('renew');
    expect(getFromSettings('renew4whatever')).toBe('renew');
  });
  
  it('getFromHostname', () => {
    expect(getFromHostname('oss.console.aliyun.com')).toBe('oss');
    expect(getFromHostname('ossnew.console.aliyun.com')).toBe('oss');
    expect(getFromHostname('ossnext.console.aliyun.com')).toBe('oss');
    expect(getFromHostname('oss-pre.console.aliyun.com')).toBe('oss');
    expect(getFromHostname('pre-ossnext.console.aliyun.com')).toBe('oss');
    expect(getFromHostname('pre-ossnew.console.aliyun.com')).toBe('oss');
    expect(getFromHostname('pre-ossnew-cn-hangzhou.console.aliyun.com')).toBe('oss');
    expect(getFromHostname('renewnew.console.aliyun.com')).toBe('renew');
    expect(getFromHostname('renewnext.console.aliyun.com')).toBe('renew');
    expect(getFromHostname('renew.console.aliyun.com')).toBe('renew');
  });
  
  it('getFromYundunHref', () => {
    expect(getFromYundunHref('https://yundun.console.aliyun.com')).toBe('');
    expect(getFromYundunHref('https://yundun.console.aliyun.com/?p=cas')).toBe('cas');
    expect(getFromYundunHref('https://yundun.console.aliyun.com?p=waf')).toBe('waf');
    expect(getFromYundunHref('https://yundun.console.aliyun.com?p=cwfnext')).toBe('cwf');
  });
});
