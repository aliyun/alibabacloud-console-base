import _isString from 'lodash/isString';

import mixedBlackWhitelistChecker from '@alicloud/mixed-black-whitelist-checker';

import {
  IFeatureItem,
  IFeatureCheckAttributes,
  IFnConfFeature,
  ICheckItem
} from '../types';
import {
  getCheckItems
} from '../util';

/**
 * 这是一个工厂方法，用于生成一个方法来检查 feature 是否可用，FEATURE_CONF 和 GRAY_CONF 需要调用者传入，原因如下：
 *
 * 1. 降低代码耦合
 * 2. 用户明确知道全局变量（或其他途径获取到的数据）的来路和去向
 * 3. 控制台的输出方式有所不同
 * 4. 方便单元测试
 *
 * @example
 *
 * 自定义项目的 `conf/feature` 模块，如 `src/conf/feature.js`：
 *
 * ```js
 * import confFeatureGen from '@alicloud/wind-util/conf-feature'; // 在你的代码中应该只出现这里一次
 *
 * export default confFeatureGen(window.ALIYUN_CONSOLE_CONFIG.FEATURE_STATUS);
 *
 * export const FEATURE_ID = {
 *   WHAT_OP: 'what:op'
 * };
 * ```
 *
 * 在你的模块中使用：
 *
 * > 最佳实践
 * > 1. 给 src 下的一级目录加上 webpack alias，alias 的命名规则为目录名前加冒号（比改成大写的方式好）
 * > 2. 杜绝硬编码到处飞，feature 字符串定义到一个统一的常量文件中，并加以说明
 *
 * ```js
 * import confFeature, {
 *   FEATURE_ID
 * } from ':conf/feature';
 *
 * // ...
 *
 * // 进行判断
 * // 不关心 region，可以不传 region 参数
 * const FEATURE_WHAT_OP_AVAILABLE = confFeature(FEATURE_ID.WHAT_OP);
 * // 关心 region，传入的 region 只会在有 regions 配置的情况下有效（否则跟不传效果一样）
 * const FEATURE_XX_OP_AVAILABLE = confFeature(FEATURE_ID.WHAT_OP, region);
 *
 * // ...
 * ```
 */
export default function factory<K extends string = string>(FEATURE_CONF: Record<string, IFeatureItem>, GRAY_CONF: Record<string, boolean> = {}): IFnConfFeature<K> {
  return (key: K, arg?: string | IFeatureCheckAttributes): boolean => {
    /*
     * 这是一个 map，长相如下：
     *
     * ```
     * {
     *   [key]: {
     *     status: boolean; // true 表示该功能可用、false 表示不可用
     *     attribute: {
     *       regions: array<string>
     *     }
     *   }, ...
     * }
     * ```
     */
    const featureConf: IFeatureItem | undefined = FEATURE_CONF[key];
    const grayValue: boolean = GRAY_CONF[key] === undefined ? true : GRAY_CONF[key];
    
    // 灰度为 false 则必然为 false（此 if 以后灰度可以认为一直是 true）
    if (!grayValue) {
      return false;
    }
    
    // 不存在功能开关的配置，以灰度为准
    if (!featureConf) {
      return true;
    }
    
    const {
      status = true
    } = featureConf;
    
    if (!status) {
      return false;
    }
    
    const attributes: IFeatureCheckAttributes = _isString(arg) ? {
      region: arg
    } : arg || {};
    const checkItems: ICheckItem[] = getCheckItems(featureConf, attributes);
    
    if (!checkItems.length) {
      return true;
    }
    
    for (let i = 0; i < checkItems.length; i++) {
      if (!mixedBlackWhitelistChecker(checkItems[i].value, checkItems[i].mixedList)) { // 有一个是 false 就返回 false
        return false;
      }
    }
    
    return true;
  };
}
