/* global describe, it, expect */
import CONF from '../src';

import pkgInfo from '../package.json';

describe(pkgInfo.name, () => {
  it('exports in correct type', () => {
    expect(CONF.ONE).toBe(false);
    expect(CONF.ENV).toBe('prod');
    expect(CONF.CHANNEL).toBe('OFFICIAL');
    expect(CONF.LANG).toBe('zh');
    expect(CONF.LOCALE).toBe('zh-CN');
    expect(CONF.SEC_TOKEN).toBe('');
    expect(CONF.ACCOUNT.ID).toBe('');
    expect(CONF.ACCOUNT.ID_MAIN).toBe('');
    expect(CONF.ACCOUNT.TYPE).toBe('main');
    expect(CONF.ACCOUNT.CERTIFIED).toBe(false);
    expect(CONF.REGIONS).toEqual([]);
    expect(CONF.OPEN_STATUS).toEqual({});
    expect(CONF.LINK).toEqual({});
    expect(CONF.FEATURE_SWITCH).toEqual({});
    expect(CONF.FEATURE_GRAY).toEqual({});
    expect(CONF.API_RESULT).toEqual({});
    expect(CONF.RULE_CONFIG).toEqual({});
    expect(CONF.LABELS).toEqual({});
    expect(CONF.USER_PREFERENCE).toEqual({});
    expect(CONF.NEW_VERSION).toBe(false);
  });
});
