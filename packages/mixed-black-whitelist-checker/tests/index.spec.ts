/* global describe, test, expect */
import pkgInfo from '../package.json';
import mixedBlackWhitelistChecker from '../src';

describe(pkgInfo.name, () => {
  const CN_WILED = 'cn-*';
  const US_WILED = 'us-*';
  const CN_HZ = 'cn-hangzhou';
  const CN_SH = 'cn-shanghai';
  const CN_HK = 'cn-hongkong';
  const US_1 = 'us-1';
  const US_2 = 'us-2';
  const CN_OTHER = 'cn-other';
  
  describe('没有黑白名单', () => {
    test('返回 true', () => {
      expect(mixedBlackWhitelistChecker('whatever', [])).toBe(true);
    });
  });
  
  describe('白名单', () => {
    test('简单名单', () => {
      const WHITELIST: string[] = [CN_HZ, CN_SH, CN_HK];
      
      expect(mixedBlackWhitelistChecker(CN_HZ, WHITELIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(CN_SH, WHITELIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(CN_HK, WHITELIST)).toBe(true);
      
      expect(mixedBlackWhitelistChecker('xx', WHITELIST)).toBe(false);
      expect(mixedBlackWhitelistChecker('cn', WHITELIST)).toBe(false);
      expect(mixedBlackWhitelistChecker(`${CN_HZ} + xx`, WHITELIST)).toBe(false);
    });
    test('通配符名单', () => {
      const WHITELIST = [CN_WILED, US_WILED];
      
      expect(mixedBlackWhitelistChecker(CN_HZ, WHITELIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(CN_SH, WHITELIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(CN_HK, WHITELIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(US_1, WHITELIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(US_2, WHITELIST)).toBe(true);
      expect(mixedBlackWhitelistChecker('xx', WHITELIST)).toBe(false);
      expect(mixedBlackWhitelistChecker('o-cn-xx', WHITELIST)).toBe(false);
    });
  });
  
  describe('黑名单', () => {
    test('简单名单', () => {
      const BLACKLIST: string[] = [`!${CN_HZ}`, `!${CN_SH}`, `!${CN_HK}`];
      
      expect(mixedBlackWhitelistChecker(CN_HZ, BLACKLIST)).toBe(false);
      expect(mixedBlackWhitelistChecker(CN_SH, BLACKLIST)).toBe(false);
      expect(mixedBlackWhitelistChecker(CN_HK, BLACKLIST)).toBe(false);
      
      expect(mixedBlackWhitelistChecker('xx', BLACKLIST)).toBe(true);
      expect(mixedBlackWhitelistChecker('cn', BLACKLIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(`${CN_HZ} + xx`, BLACKLIST)).toBe(true);
    });
    test('通配符名单', () => {
      const BLACKLIST = [`!${CN_WILED}`, `!${US_WILED}`];
      
      expect(mixedBlackWhitelistChecker(CN_HZ, BLACKLIST)).toBe(false);
      expect(mixedBlackWhitelistChecker(CN_SH, BLACKLIST)).toBe(false);
      expect(mixedBlackWhitelistChecker(CN_HK, BLACKLIST)).toBe(false);
      expect(mixedBlackWhitelistChecker(US_1, BLACKLIST)).toBe(false);
      expect(mixedBlackWhitelistChecker(US_2, BLACKLIST)).toBe(false);
      expect(mixedBlackWhitelistChecker('xx', BLACKLIST)).toBe(true);
      expect(mixedBlackWhitelistChecker('o-cn-xx', BLACKLIST)).toBe(true);
    });
  });
  
  describe('黑 + 白名单', () => {
    test('简单名单', () => {
      const LIST: string[] = [CN_HZ, CN_SH, `!${CN_HK}`];
      
      expect(mixedBlackWhitelistChecker(CN_HZ, LIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(CN_SH, LIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(CN_HK, LIST)).toBe(false);
    });
  });
  
  describe('黑 + 白名单', () => {
    test('简单名单', () => {
      const LIST: string[] = [CN_HZ, CN_SH, `!${CN_HK}`];
      
      expect(mixedBlackWhitelistChecker(CN_HZ, LIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(CN_SH, LIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(CN_HK, LIST)).toBe(false);
    });
    test('通配黑 + 简单白', () => {
      const LIST: string[] = [CN_HZ, CN_SH, `!${US_WILED}`];
      
      expect(mixedBlackWhitelistChecker(CN_HZ, LIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(CN_SH, LIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(CN_OTHER, LIST)).toBe(false);
      expect(mixedBlackWhitelistChecker(US_1, LIST)).toBe(false);
      expect(mixedBlackWhitelistChecker(US_2, LIST)).toBe(false);
    });
    test('简单黑 + 通配白', () => {
      const LIST: string[] = [CN_WILED, `!${CN_HK}`];
      
      expect(mixedBlackWhitelistChecker(CN_HZ, LIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(CN_SH, LIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(CN_OTHER, LIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(CN_HK, LIST)).toBe(false);
      expect(mixedBlackWhitelistChecker(US_1, LIST)).toBe(false);
      expect(mixedBlackWhitelistChecker(US_2, LIST)).toBe(false);
    });
    test('通配黑 + 通配白', () => {
      const LIST: string[] = [CN_WILED, `!${US_WILED}`];
      
      expect(mixedBlackWhitelistChecker(CN_HZ, LIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(CN_SH, LIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(CN_OTHER, LIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(CN_HK, LIST)).toBe(true);
      expect(mixedBlackWhitelistChecker(US_1, LIST)).toBe(false);
      expect(mixedBlackWhitelistChecker(US_2, LIST)).toBe(false);
    });
  });
});
