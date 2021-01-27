/* global describe, it, expect */
import pkgInfo from '../package.json';
import jsonStringifyOrdered from '../src';

const EQUAL_OBJECT_PAIRS: [unknown, unknown][] = [
  [{}, {}],
  [{
    a: 1,
    b: 2,
    c: 3
  }, {
    b: 2,
    c: 3,
    a: 1
  }],
  [{
    a: [1, 3, 2],
    b: {
      bb: '1',
      bool: true,
      bool0: false,
      arr: [123456, 7654, '', {
        aaa: 'aaa',
        bbb: 111
      }]
    },
    c: 3
  }, {
    b: {
      bool0: false,
      bb: '1',
      bool: true,
      arr: [123456, 7654, '', {
        bbb: 111,
        aaa: 'aaa'
      }]
    },
    c: 3,
    a: [1, 3, 2]
  }]
];

describe(pkgInfo.name, () => {
  it('equals', () => {
    EQUAL_OBJECT_PAIRS.forEach(([o1, o2]) => {
      expect(jsonStringifyOrdered(o1)).toBe(jsonStringifyOrdered(o2));
    });
  });
});
