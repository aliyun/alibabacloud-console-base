/**
 * @jest-environment jsdom
 */
/* global describe, test, expect */
import pkgInfo from '../package.json';
import confFeatureFactory from '../src';

describe(pkgInfo.name, () => {
  describe('missing FEATURE_CONF or key', () => {
    test('TRUE when `FEATURE_CONF` does NOT exist', () => {
      const checkFeature = confFeatureFactory({});
      
      expect(checkFeature('feature:op')).toBe(true);
      expect(checkFeature('feature:op', 'region')).toBe(true);
      expect(checkFeature('feature:op', {
        attr1: '1'
      })).toBe(true);
    });
    
    test('TRUE when `FEATURE_CONF` does NOT contain key', () => {
      const checkFeature = confFeatureFactory({});
      
      expect(checkFeature('feature:op')).toBe(true);
      expect(checkFeature('feature:op', 'region')).toBe(true);
      expect(checkFeature('feature:op', {
        attr1: '1'
      })).toBe(true);
    });
    
    test('TRUE when `FEATURE_CONF` does NOT contain key, but exists in GRAY', () => {
      const TRUE_GRAY = 'true:gray';
      const FALSE_GRAY = 'false:gray';
      
      const checkFeature = confFeatureFactory({}, {
        [TRUE_GRAY]: true,
        [FALSE_GRAY]: false
      });
      
      expect(checkFeature(TRUE_GRAY)).toBe(true);
      expect(checkFeature(FALSE_GRAY)).toBe(false);
    });
  });
  
  describe('FEATURE_CONF is set and key is found', () => {
    enum EFeature {
      FALSE = 'false',
      FALSE_REGION_WHITE = 'false:region:white',
      TRUE = 'true',
      TRUE_NOT_IN_FEATURE_OR_GRAY = 'true:not_in:feature_or_gray',
      TRUE_MISSING_ATTRIBUTE = 'true:missing:attribute',
      TRUE_REGION_WHITE = 'true:region:white',
      TRUE_REGION_WHITE_WILD = 'true:region:white:wild',
      TRUE_REGION_BLACK = 'true:region:black',
      TRUE_REGION_BLACK_WILD = 'true:region:black:wild',
      TRUE_REGION_WHITE_WITH_BLACK = 'true:region:white-black',
      WITH_CUSTOM_ATTRIBUTES = 'with_custom_attributes'
    }
    const REGION_CN_HZ = 'cn-hangzhou';
    const REGION_CN_SH = 'cn-shanghai';
    const REGION_CN_HK = 'cn-hongkong';
    const REGION_CN_OTHER = 'cn-other';
    const REGION_CN_ALL = 'cn-*';
    const REGION_NON_CN = 'any-other-region';
    const FEATURE_CONF = {
      [EFeature.FALSE]: {
        status: false,
        attribute: {
          regions: []
        }
      },
      [EFeature.FALSE_REGION_WHITE]: {
        status: false,
        attribute: {
          regions: [REGION_CN_HZ, REGION_CN_SH, REGION_CN_HK]
        }
      },
      [EFeature.TRUE]: {
        status: true,
        attribute: {
          regions: []
        }
      },
      [EFeature.TRUE_MISSING_ATTRIBUTE]: {
        status: true
      },
      [EFeature.TRUE_REGION_WHITE]: {
        status: true,
        attribute: {
          regions: [REGION_CN_HZ, REGION_CN_SH, REGION_CN_HK]
        }
      },
      [EFeature.TRUE_REGION_WHITE_WILD]: {
        status: true,
        attribute: {
          regions: [REGION_CN_ALL]
        }
      },
      [EFeature.TRUE_REGION_BLACK]: {
        status: true,
        attribute: {
          regions: [`!${REGION_CN_HZ}`, `!${REGION_CN_SH}`, `!${REGION_CN_HK}`]
        }
      },
      [EFeature.TRUE_REGION_BLACK_WILD]: {
        status: true,
        attribute: {
          regions: [`!${REGION_CN_ALL}`]
        }
      },
      [EFeature.TRUE_REGION_WHITE_WITH_BLACK]: {
        status: true,
        attribute: {
          regions: [REGION_CN_ALL, `!${REGION_CN_HK}`] // 支持所有的中国区域，但香港除外
        }
      },
      [EFeature.WITH_CUSTOM_ATTRIBUTES]: {
        status: true,
        attribute: {
          customAttrs: {
            attr1: '1',
            attr2: '22',
            list: 'huck,shuck,duck,truck'
          }
        }
      }
    };
    const GRAY_CONF = {
      [EFeature.FALSE]: true,
      [EFeature.TRUE]: false
    };
    const confFeature = confFeatureFactory<EFeature>(FEATURE_CONF);
    const confFeatureWithGray = confFeatureFactory(FEATURE_CONF, GRAY_CONF);
    
    // status === false -> false
    test('FALSE when status is `false`, regardless of regions configured and passed', () => {
      expect(confFeature(EFeature.FALSE)).toBe(false);
      expect(confFeature(EFeature.FALSE, REGION_NON_CN)).toBe(false);
      expect(confFeature(EFeature.FALSE_REGION_WHITE)).toBe(false);
      expect(confFeature(EFeature.FALSE_REGION_WHITE, {
        region: REGION_CN_HK
      })).toBe(false);
      expect(confFeature(EFeature.FALSE_REGION_WHITE, REGION_NON_CN)).toBe(false);
      expect(confFeature(EFeature.FALSE_REGION_WHITE, {
        region: REGION_CN_HK
      })).toBe(false);
      expect(confFeature(EFeature.FALSE_REGION_WHITE, {
        region: REGION_NON_CN
      })).toBe(false);
    });
    
    // status === true --> false
    test('FALSE when status is true, but region is not in whitelist', () => {
      expect(confFeature(EFeature.TRUE_REGION_WHITE, REGION_NON_CN)).toBe(false);
      expect(confFeature(EFeature.TRUE_REGION_WHITE_WILD, REGION_NON_CN)).toBe(false);
      expect(confFeature(EFeature.TRUE_REGION_WHITE, {
        region: REGION_NON_CN
      })).toBe(false);
      expect(confFeature(EFeature.TRUE_REGION_WHITE_WILD, {
        region: REGION_NON_CN
      })).toBe(false);
    });
    
    test('FALSE when status is true, but region is in blacklist', () => {
      expect(confFeature(EFeature.TRUE_REGION_BLACK, REGION_CN_HZ)).toBe(false);
      expect(confFeature(EFeature.TRUE_REGION_BLACK_WILD, REGION_CN_SH)).toBe(false);
      expect(confFeature(EFeature.TRUE_REGION_BLACK_WILD, REGION_CN_OTHER)).toBe(false);
      expect(confFeature(EFeature.TRUE_REGION_BLACK_WILD, {
        region: REGION_CN_SH
      })).toBe(false);
      expect(confFeature(EFeature.TRUE_REGION_BLACK_WILD, {
        region: REGION_CN_OTHER
      })).toBe(false);
    });
    
    // status === true --> true
    test('TRUE when status is true, and no region configured (cover missing attribute)', () => {
      expect(confFeature(EFeature.TRUE)).toBe(true);
      expect(confFeature(EFeature.TRUE, REGION_NON_CN)).toBe(true);
      expect(confFeature(EFeature.TRUE, {
        region: REGION_NON_CN
      })).toBe(true);
      expect(confFeature(EFeature.TRUE_MISSING_ATTRIBUTE)).toBe(true);
      expect(confFeature(EFeature.TRUE_MISSING_ATTRIBUTE, REGION_NON_CN)).toBe(true);
      expect(confFeature(EFeature.TRUE_MISSING_ATTRIBUTE, {
        region: REGION_NON_CN
      })).toBe(true);
    });
    
    test('TRUE when status is true, and region in whitelist or region not given', () => {
      expect(confFeature(EFeature.TRUE_REGION_WHITE)).toBe(true);
      expect(confFeature(EFeature.TRUE_REGION_WHITE, REGION_CN_HZ)).toBe(true);
      expect(confFeature(EFeature.TRUE_REGION_WHITE, REGION_CN_SH)).toBe(true);
      expect(confFeature(EFeature.TRUE_REGION_WHITE, REGION_CN_HK)).toBe(true);
      expect(confFeature(EFeature.TRUE_REGION_WHITE, {
        region: REGION_CN_HZ
      })).toBe(true);
      expect(confFeature(EFeature.TRUE_REGION_WHITE, {
        region: REGION_CN_SH
      })).toBe(true);
      expect(confFeature(EFeature.TRUE_REGION_WHITE, {
        region: REGION_CN_HK
      })).toBe(true);
    });
    
    test('TRUE when status is true, but region is in blacklist', () => {
      expect(confFeature(EFeature.TRUE_REGION_BLACK, 'any-other')).toBe(true);
      expect(confFeature(EFeature.TRUE_REGION_BLACK_WILD, 'any-other')).toBe(true);
      expect(confFeature(EFeature.TRUE_REGION_BLACK_WILD, 'any-other')).toBe(true);
      expect(confFeature(EFeature.TRUE_REGION_BLACK, {
        region: 'any-other'
      })).toBe(true);
      expect(confFeature(EFeature.TRUE_REGION_BLACK_WILD, {
        region: 'any-other'
      })).toBe(true);
      expect(confFeature(EFeature.TRUE_REGION_BLACK_WILD, {
        region: 'any-other'
      })).toBe(true);
    });
    
    // white with black
    test('should blacklist prior to whitelist', () => {
      expect(confFeature(EFeature.TRUE_REGION_WHITE_WITH_BLACK, REGION_CN_HK)).toBe(false);
      expect(confFeature(EFeature.TRUE_REGION_WHITE_WITH_BLACK, {
        region: REGION_CN_HK
      })).toBe(false);
      // expect(confFeature(FEATURES.TRUE_REGION_WHITE_WITH_BLACK, REGION_CN_SH)).toBe(true);
    });
    
    // with gray conf
    test('gray: feature stays false even if gray is true', () => {
      expect(confFeatureWithGray(EFeature.FALSE)).toBe(false);
    });
    test('gray: feature true became false because of gray', () => {
      expect(confFeatureWithGray(EFeature.TRUE)).toBe(false);
    });
    
    // custom attributes
    test('custom attributes', () => {
      expect(confFeatureWithGray(EFeature.WITH_CUSTOM_ATTRIBUTES)).toBe(true); // 不传不会判断 custom
      expect(confFeatureWithGray(EFeature.WITH_CUSTOM_ATTRIBUTES, {
        attr1: '1'
      })).toBe(true);
      expect(confFeatureWithGray(EFeature.WITH_CUSTOM_ATTRIBUTES, {
        attr1: '22'
      })).toBe(false);
      expect(confFeatureWithGray(EFeature.WITH_CUSTOM_ATTRIBUTES, {
        attr1: '1',
        attr2: '22'
      })).toBe(true);
      expect(confFeatureWithGray(EFeature.WITH_CUSTOM_ATTRIBUTES, {
        attr1: '1',
        attr2: '4'
      })).toBe(false);
      expect(confFeatureWithGray(EFeature.WITH_CUSTOM_ATTRIBUTES, {
        attr1: '1',
        attrNotExist: 'attrNotExist'
      })).toBe(true);
      expect(confFeatureWithGray(EFeature.WITH_CUSTOM_ATTRIBUTES, {
        list: 'list'
      })).toBe(true);
    });
  });
  
  describe('locale', () => {
    enum EFeatureLocale {
      NO_LOCALE_1 = 'no_locale_1',
      NO_LOCALE_2 = 'no_locale_2',
      NO_LOCALE_3 = 'no_locale_3',
      WITH_LOCALE_ZH_CN_1 = 'with_locale_zh_cn_1',
      WITH_LOCALE_ZH_CN_2 = 'WITH_LOCALE_ZH_CN_2',
      WITH_LOCALE_3 = 'with_locale_3'
    }
    
    // status 都是 true
    const FEATURE_CONF = {
      [EFeatureLocale.NO_LOCALE_1]: {
        status: true
      },
      [EFeatureLocale.NO_LOCALE_2]: {
        status: true,
        attribute: {
          customAttrs: {}
        }
      },
      [EFeatureLocale.NO_LOCALE_3]: {
        status: true,
        attribute: {
          customAttrs: {
            $locale: ''
          }
        }
      },
      [EFeatureLocale.WITH_LOCALE_ZH_CN_1]: {
        status: true,
        attribute: {
          customAttrs: {
            $locale: 'zh-CN'
          }
        }
      },
      [EFeatureLocale.WITH_LOCALE_ZH_CN_2]: {
        status: true,
        attribute: {
          customAttrs: {
            $locale: 'en-US,zh-CN'
          }
        }
      },
      [EFeatureLocale.WITH_LOCALE_3]: {
        status: true,
        attribute: {
          customAttrs: {
            $locale: 'en-US,ja-JP'
          }
        }
      }
    };
    const confFeature = confFeatureFactory<EFeatureLocale>(FEATURE_CONF);
    
    // custom attributes
    test('no $locale in custom attr, return true', () => {
      expect(confFeature(EFeatureLocale.NO_LOCALE_1)).toBe(true);
      expect(confFeature(EFeatureLocale.NO_LOCALE_2)).toBe(true);
      expect(confFeature(EFeatureLocale.NO_LOCALE_3)).toBe(true);
    });
    
    test('with locale zh-CN', () => { // test 下只有 zh-CN
      expect(confFeature(EFeatureLocale.WITH_LOCALE_ZH_CN_1)).toBe(true);
      expect(confFeature(EFeatureLocale.WITH_LOCALE_ZH_CN_2)).toBe(true);
    });
    
    test('with locale not zh-CN', () => {
      expect(confFeature(EFeatureLocale.WITH_LOCALE_3)).toBe(false);
    });
  });
});
