/* global describe, it, expect */

import pkgInfo from '../package.json';
import flattenObject from '../src/helper/flatten-object';

describe(pkgInfo.name, () => {
  it('will flatten right', () => {
    expect(flattenObject({
      a: {
        b: 'AB',
        c: {
          d: 123
        }
      }
    })).toEqual({
      'a.b': 'AB',
      'a.c.d': 123
    });
    
    expect(flattenObject({
      a: {
        b: 'AB'
      },
      c: [1, 2],
      d: false,
      e: {}
    })).toEqual({
      'a.b': 'AB',
      c: [1, 2],
      d: false,
      e: {}
    });
  });

  it('with prefix', () => {
    expect(flattenObject({
      a: {
        b: 'AB'
      },
      c: [1, 2],
      d: false,
      e: {}
    }, 'error')).toEqual({
      'error.a.b': 'AB',
      'error.c': [1, 2],
      'error.d': false,
      'error.e': {}
    });
  });
  
  it('default depth 3', () => {
    expect(flattenObject({
      a: {
        b: {
          c: {
            d: {
              e: 'ABCDE'
            }
          }
        }
      }
    })).toEqual({
      'a.b.c': {
        d: {
          e: 'ABCDE'
        }
      }
    });
  });

  it('can flatten error instance', () => {
    const err = new Error('SomeMessage');
    
    (err as unknown as Record<string, unknown>).info = {
      a: {
        b: 'AB',
        c: {
          d: [1, 2]
        }
      },
      e: false,
      f: 123
    };
    
    const flattenedErr = flattenObject(err, 'error');
    
    expect(flattenedErr['error.name']).toBe('Error');
    expect(flattenedErr['error.message']).toBe('SomeMessage');
    expect(flattenedErr['error.stack']).toBeDefined();
    expect(flattenedErr['error.info.a.b']).toBe('AB');
    expect(flattenedErr['error.info.a.c']).toEqual({
      d: [1, 2]
    });
  });
});
