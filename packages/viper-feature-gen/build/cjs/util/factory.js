"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = factory;

var _isString2 = _interopRequireDefault(require("lodash/isString"));

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

var _mixedBlackWhitelistChecker = _interopRequireDefault(require("@alicloud/mixed-black-whitelist-checker"));

/**
 * 这是一个工厂方法，用于生成一个方法来检查 feature 是否可用
 *
 * 这里的 FEATURE_CONF 和 GRAY_CONF 需要调用者传入，因为：
 *
 * 1. 可降低代码耦合
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
 * > 最佳实践 1：给 src 下的一级目录加上 webpack alias，alias 的命名规则为目录名前加冒号（比改成大写的方式好）
 * > 最佳实践 2：杜绝硬编码到处飞，feature 字符串定义到一个统一的常量文件中，并加以说明
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
function factory() {
  var FEATURE_CONF = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var GRAY_CONF = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (key, arg) {
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
    var featureConf = FEATURE_CONF[key];
    var grayValue = GRAY_CONF[key] === undefined ? true : GRAY_CONF[key]; // 灰度为 false 则必然为 false（此 if 以后灰度可以认为一直是 true）

    if (grayValue === false) {
      return false;
    } // 不存在功能开关的配置，以灰度为准


    if (!featureConf) {
      return true;
    }

    var _featureConf$status = featureConf.status,
        status = _featureConf$status === void 0 ? true : _featureConf$status,
        _featureConf$attribut = featureConf.attribute;
    _featureConf$attribut = _featureConf$attribut === void 0 ? {} : _featureConf$attribut;
    var _featureConf$attribut2 = _featureConf$attribut.regions,
        regions = _featureConf$attribut2 === void 0 ? [] : _featureConf$attribut2,
        _featureConf$attribut3 = _featureConf$attribut.customAttrs,
        customAttrs = _featureConf$attribut3 === void 0 ? {} : _featureConf$attribut3;

    if (!status) {
      return false;
    }

    var attributesToCheck = [];

    if ((0, _isString2.default)(arg)) {
      attributesToCheck.push({
        value: arg,
        mixedList: regions
      });
    } else {
      (0, _forEach2.default)(arg, function (v, k) {
        if (!v) {
          return;
        }

        if (k === 'region') {
          // region 还是判断 regions
          attributesToCheck.push({
            value: v,
            mixedList: regions
          });
        } else {
          // 其他的从 customAttrs 中取数据
          var attr = customAttrs[k];

          if (attr) {
            attributesToCheck.push({
              value: v,
              mixedList: attr.split(/[\n,]/)
            });
          }
        }
      });
    }

    if (!attributesToCheck.length) {
      return true;
    }

    for (var i = 0; i < attributesToCheck.length; i++) {
      if (!(0, _mixedBlackWhitelistChecker.default)(attributesToCheck[i].value, attributesToCheck[i].mixedList)) {
        // 有一个是 false 就返回 false
        return false;
      }
    }

    return true;
  };
}