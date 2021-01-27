/* global describe, it, expect */
import pkgInfo from '../package.json';
import jsonStringifyOrdered from '../src';

const o1 = {
  a: 1,
  b: 2,
  c: 3
};

const o2 = {
  b: 2,
  c: 3,
  a: 1
};

describe(pkgInfo.name, () => {
  it('exports in correct type', () => {
    console.info(jsonStringifyOrdered(o1))
    
    expect(jsonStringifyOrdered(o1)).toBe(jsonStringifyOrdered(o2));
  });
});
