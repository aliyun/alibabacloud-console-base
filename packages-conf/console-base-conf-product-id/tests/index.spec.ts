/* global describe, it, expect */

import pkgInfo from '../package.json';
import getFromSettings from '../src/util/get-from-settings';
import getFromUrl from '../src/util/get-from-url';

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
  
  it('getFromUrl', () => {
    expect(getFromUrl('https://oss.console.aliyun.com')).toBe('oss');
    expect(getFromUrl('https://ossnew.console.aliyun.com')).toBe('oss');
    expect(getFromUrl('https://ossnext.console.aliyun.com')).toBe('oss');
    expect(getFromUrl('https://oss-pre.console.aliyun.com')).toBe('oss');
    expect(getFromUrl('https://pre-ossnext.console.aliyun.com')).toBe('oss');
    expect(getFromUrl('https://pre-ossnew.console.aliyun.com')).toBe('oss');
    expect(getFromUrl('https://pre-ossnew-cn-hangzhou.console.aliyun.com')).toBe('oss');
    expect(getFromUrl('https://renewnew.console.aliyun.com')).toBe('renew');
    expect(getFromUrl('https://renewnext.console.aliyun.com')).toBe('renew');
    expect(getFromUrl('https://renew.console.aliyun.com')).toBe('renew');
    expect(getFromUrl('https://yundun.console.aliyun.com')).toBe('yundun');
    expect(getFromUrl('https://yundun.console.aliyun.com/?p=cas')).toBe('cas');
    expect(getFromUrl('https://yundun.console.aliyun.com?p=waf')).toBe('waf');
    expect(getFromUrl('https://yundun.console.aliyun.com?p=cwfnext')).toBe('cwf');
  });
});
