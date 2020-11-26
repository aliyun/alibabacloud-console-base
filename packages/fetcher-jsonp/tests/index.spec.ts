/* global describe, it, expect */

import pkgInfo from '../package.json';

describe(pkgInfo.name, () => {
  it('exports in correct type', () => {
    expect(typeof 'TODO').toBe('function');
  });
});
