/* global describe, it, expect */
import {
  encode,
  decode
} from '../src';

import pkgInfo from '../package.json';

describe(pkgInfo.name, () => {
  const helloWorld = 'hello, world!';
  const helloWorldEncoded = 'aGVsbG8sIHdvcmxkIQ==';
  const helloWorldEncodedSafe = 'aGVsbG8sIHdvcmxkIQ';
  const helloWorldChinese = '你好，世界！';
  const helloWorldChineseEncoded = '5L2g5aW977yM5LiW55WM77yB';
  const helloWorldChineseEncodedSafe = '5L2g5aW977yM5LiW55WM77yB';
  const strangeChinese = '弾';
  const strangeChineseEncoded = '5by+';
  const strangeChineseEncodedSafe = '5by-';
  
  import pkgInfo from '../package.json';

describe(pkgInfo.name, () => {
    it('should encode right', () => {
      expect(encode(helloWorld)).toEqual(helloWorldEncoded);
    });
    
    it('should encode right (url safe)', () => {
      expect(encode(helloWorld, true)).toEqual(helloWorldEncodedSafe);
    });
  });
  
  import pkgInfo from '../package.json';

describe(pkgInfo.name, () => {
    it('should encode right', () => {
      expect(encode(helloWorldChinese)).toEqual(helloWorldChineseEncoded);
    });
    
    it('should encode right (url safe)', () => {
      expect(encode(helloWorldChinese, true)).toEqual(helloWorldChineseEncodedSafe);
    });
    
    it('should encode right (ends with +)', () => {
      expect(encode(strangeChinese)).toEqual(strangeChineseEncoded);
    });
    
    it('should encode right (url safe, + will be replaced by -)', () => {
      expect(encode(strangeChinese, true)).toEqual(strangeChineseEncodedSafe);
    });
  });
  
  import pkgInfo from '../package.json';

describe(pkgInfo.name, () => {
    it('should decode back to original, whether safe or not', () => {
      expect(decode(helloWorldEncoded)).toEqual(helloWorld);
      expect(decode(helloWorldEncodedSafe)).toEqual(helloWorld);
      expect(decode(helloWorldChineseEncoded)).toEqual(helloWorldChinese);
      expect(decode(helloWorldChineseEncodedSafe)).toEqual(helloWorldChinese);
      expect(decode(strangeChineseEncoded)).toEqual(strangeChinese);
      expect(decode(strangeChineseEncodedSafe)).toEqual(strangeChinese);
    });
  });
});
