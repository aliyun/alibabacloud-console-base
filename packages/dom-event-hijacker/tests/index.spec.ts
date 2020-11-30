import TheRc from '../src';

import pkgInfo from '../package.json';

describe(pkgInfo.name, () => {
  it('exports in correct type', () => {
    [TheRc].forEach(v => {
      expect(typeof v).toBe('function');
    });
  });
});
